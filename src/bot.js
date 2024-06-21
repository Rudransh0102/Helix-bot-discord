const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const Facebook = require("erela.js-facebook");
const Deezer = require("erela.js-deezer");
const AppleMusic = require("erela.js-apple");

// Discord client
const client = new Discord.Client({
  allowedMentions: {
    parse: [
      'users',
      'roles'
    ],
    repliedUser: true
  },
  autoReconnect: true,
  disabledEvents: [
    "TYPING_START"
  ],
  partials: [
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.Message,
    Discord.Partials.Reaction,
    Discord.Partials.User,
    Discord.Partials.GuildScheduledEvent
  ],
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildModeration,
    Discord.GatewayIntentBits.GuildEmojisAndStickers,
    Discord.GatewayIntentBits.GuildIntegrations,
    Discord.GatewayIntentBits.GuildWebhooks,
    Discord.GatewayIntentBits.GuildInvites,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMessageReactions,
    Discord.GatewayIntentBits.GuildMessageTyping,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.DirectMessageReactions,
    Discord.GatewayIntentBits.DirectMessageTyping,
    Discord.GatewayIntentBits.GuildScheduledEvents,
    Discord.GatewayIntentBits.MessageContent
  ],
  restTimeOffset: 0
});


const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
if (clientID && clientSecret) {
  // Lavalink client
  client.player = new Manager({
    plugins: [
      new AppleMusic(),
      new Deezer(),
      new Facebook(),
      new Spotify({
        clientID,
        clientSecret,
      })
    ],
    nodes: [
      {
        host: process.env.LAVALINK_HOST,
        port: parseInt(process.env.LAVALINK_PORT),
        password: process.env.LAVALINK_PASSWORD
      },
    ],
    send(id, payload) {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    },
  })

} else {
  // Lavalink client
  client.player = new Manager({
    plugins: [
      new AppleMusic(),
      new Deezer(),
      new Facebook(),
    ],
    nodes: [
      {
        host: process.env.LAVALINK_HOST,
        port: parseInt(process.env.LAVALINK_PORT),
        password: process.env.LAVALINK_PASSWORD
      },
    ],
    send(id, payload) {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    }
  })
}
const events = fs.readdirSync(`./src/events/music`).filter(files => files.endsWith('.js'));

for (const file of events) {
  const event = require(`./events/music/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client)).setMaxListeners(0);
};

// Connect to database
require("./database/connect")();

// Client settings
client.config = require('./config/bot');
client.changelogs = require('./config/changelogs');
client.emotes = require("./config/emojis.json");
client.webhooks = require("./config/webhooks.json");
const webHooksArray = ['startLogs', 'shardLogs', 'errorLogs', 'dmLogs', 'voiceLogs', 'serverLogs', 'serverLogs2', 'commandLogs', 'consoleLogs', 'warnLogs', 'voiceErrorLogs', 'creditLogs', 'evalLogs', 'interactionLogs'];
// Check if .env webhook_id and webhook_token are set
if (process.env.WEBHOOK_ID && process.env.WEBHOOK_TOKEN) {
  for (const webhookName of webHooksArray) {
    client.webhooks[webhookName].id = process.env.WEBHOOK_ID;
    client.webhooks[webhookName].token = process.env.WEBHOOK_TOKEN;
  }
}

client.commands = new Discord.Collection();
client.playerManager = new Map();
client.triviaManager = new Map();
client.queue = new Map();

// Webhooks
const consoleLogs = new Discord.WebhookClient({
  id: client.webhooks.consoleLogs.id,
  token: client.webhooks.consoleLogs.token,
});

const warnLogs = new Discord.WebhookClient({
  id: client.webhooks.warnLogs.id,
  token: client.webhooks.warnLogs.token,
});

// Load handlers
fs.readdirSync('./src/handlers').forEach((dir) => {
  fs.readdirSync(`./src/handlers/${dir}`).forEach((handler) => {
    require(`./handlers/${dir}/${handler}`)(client);
  });
});

client.login(process.env.DISCORD_TOKEN);

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
  if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
  if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
  if (!error.stack) return
  const embed = new Discord.EmbedBuilder()
    .setTitle(`🚨・Unhandled promise rejection`)
    .addFields([
      {
        name: "Error",
        value: error ? Discord.codeBlock(error) : "No error",
      },
      {
        name: "Stack error",
        value: error.stack ? Discord.codeBlock(error.stack) : "No stack error",
      }
    ])
    .setColor(client.config.colors.normal)
  consoleLogs.send({
    username: 'Bot Logs',
    embeds: [embed],
  }).catch(() => {
    console.log('Error sending unhandledRejection to webhook')
    console.log(error)
  })
});

process.on('warning', warn => {
  console.warn("Warning:", warn);
  const embed = new Discord.EmbedBuilder()
    .setTitle(`🚨・New warning found`)
    .addFields([
      {
        name: `Warn`,
        value: `\`\`\`${warn}\`\`\``,
      },
    ])
    .setColor(client.config.colors.normal)
  warnLogs.send({
    username: 'Bot Logs',
    embeds: [embed],
  }).catch(() => {
    console.log('Error sending warning to webhook')
    console.log(warn)
  })
});


/*client.on("guildcreate", (guild) => { 
  if (guild.memberCount < 35) {
      guild.leave();
  }
});


client.on('ready', (client) => {
  setInterval(function() {
    client.guilds.cache.forEach((g) => {
      if (g.memberCount > 35 || g.id === "guild_id"|| g.id === "guild_id") return;
      g.leave()
      .then(m => console.log(`Left the guilds ${m} because of less members`))
    }, 5 * 1000)
    })
  });
  
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Leave all guilds the bot is currently in
  client.guilds.cache.forEach(guild => {
    guild.leave();
    console.log(`Left guild: ${guild.name}`);
  });
});*/
