const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const promises = [
        Promise.resolve(client.guilds.cache.size),
        Promise.resolve(client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        Promise.resolve(client.channels.cache.size),
        Promise.resolve(client.voice.adapters.size)
    ];
    return Promise.all(promises)
        .then(async results => {
            const totalGuilds = results[0];
            const totalMembers = results[1];
            const totalChannels = results[2];
            const totalVoice = results[3];

            const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

            client.embed({
                title: `<:information1:1098972252462141530>• ┆****Bot information****`,
                desc: `> **Empower your Discord server with our versatile multipurpose bot, designed to streamline tasks, enhance engagement, and elevate your community experience.**\n`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                fields: [
                {
                    name: "\n",
                    value: `_ _`,
                    inline: false,
                },
                {
                    name: "<:ArrowDCL:1099329821361844306>│**General information**",
                    value: `_ _`,
                    inline: false,
                },
                {
                    name: "<:bot:1099212006298501200>****┆Bot name****",
                    value: `> **${client.user.username}**`,
                    inline: true,
                },
                {
                    name: "<:PP_ID:1099339521050550384>****┆Bot id****",
                    value: `> **${client.user.id}**`,
                    inline: true,
                },
                /*{
                    name: "💻┆Shards",
                    value: `\`${client.options.shardCount}\` shards`,
                    inline: true,
                },*/
                {
                    name: "****<a:crown_uo:1093521837553614999>┆Bot owner****",
                    value: `> ****<@!769467035419279391>**** `,
                    inline: true,
                },
                {
                    name: "****<a:verified_developer:1093519599082930176>┆Bot developer****",
                    value: `> ****<@!769467035419279391>****`,
                    inline: true,
                },
                {
                    name: "<:slash:1098972701441413140>┆****Commands****",
                    value: `> **${client.commands.size} commands**`,
                    inline: true,
                },
                {
                    name: "****<:Server:1099343664024649870>┆Servers****",
                    value: `> **${totalGuilds}** servers`,
                    inline: true,
                },
                /*{
                    name: "🌐┆Servers this shard",
                    value: `\`${client.guilds.cache.size}\` servers`,
                    inline: true,
                },*/
                {
                    name: "<:group:1099043617991041055>┆****Members****",
                    value: `> **${totalMembers} members**`,
                    inline: true,
                },
                {
                    name: "<:voice_chat:1099408667100598333>┆****Connected channels****",
                    value: `> **${totalVoice} channels**`,
                    inline: true,
                },
                {
                    name: "<:monitor:1098973656002080779>┆**Channels**",
                    value: `> **${totalChannels} channels**`,
                    inline: true,
                },
                {
                    name: "<:events:1099412807595860111>┆****Created****",
                    value: `> **<t:${Math.round(client.user.createdTimestamp / 1000)}>**\n`,
                    inline: true,
                },
                {
                    name: "\n",
                    value: `_ _`,
                    inline: false,
                },
                {
                    name: "<:ArrowDCL:1099329821361844306>│****System****",
                    value: `_ _`,
                    inline: false,
                },
                {
                    name: `${client.emotes.normal.uptime}┆****Uptime****`,
                    value: `> **${duration}**`,
                    inline: true,
                },
                {
                    name: `${client.emotes.normal.api_latency}┆****API latency****`,
                    value: `> **${client.ws.ping} ms**`,
                    inline: true,
                },
                {
                    name: "🏷┆****Bot Version****",
                    value: `> **${require(`${process.cwd()}/package.json`).version}**`,
                    inline: true,
                },
                {
                    name: "🏷┆****Node.js Version****",
                    value: `> **${process.version}**`,
                    inline: true,
                },
                {
                    name: "<:folder:1099283463770742897>┆****Discord.js Version****",
                    value: `> **${Discord.version}** `,
                    inline: true,
                },
                {
                    name: "<:helix_memory:1099555076781113374>┆****Bot memory****",
                    value: `> **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** MB`,
                    inline: true,
                },
                {
                    name: "<:helix_link:1093959383626551356>┆****Links****",
                    value: `> Add me: [[HERE]](${client.config.discord.botInvite}) \n> Support server: [[HERE]](${client.config.discord.serverInvite})`,
                    inline: false,
                }],
                type: 'editreply'
            }, interaction)
        })
}

 
