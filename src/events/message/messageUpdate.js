const Discord = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
    try {
        if (!oldMessage.content || !newMessage.content) return;
        if (oldMessage.content === newMessage.content) return;
        if (oldMessage.author.bot) return;

        const logsChannel = await client.getLogs(oldMessage.guild.id);
        if (!logsChannel) return;

let row = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.ButtonBuilder()
                        .setEmoji("<:helix_link:1093959383626551356>")
                        .setLabel("Jump to the Message")
                        .setURL(`https://discordapp.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id}`)
                        .setStyle(Discord.ButtonStyle.Link),
                  );
      
        client.embed({
            title: `💬・Message updated`,
            desc: `**> A message has been updated**`,
            fields: [
                {
                    name: `> Author :`,
                    value: `** <:whitearrow:1099256019609211021> ${newMessage.member.user} (${newMessage.member.user.tag})**`
                },
                {
                    name: `> Date :`,
                    value: `** <:whitearrow:1099256019609211021> ${newMessage.createdAt}**`
                },
                {
                    name: `> Channel :`,
                    value: `** <:whitearrow:1099256019609211021> ${newMessage.channel} (${newMessage.channel.name})**`
                },
                {
                    name: `> Old message :`,
                    value: `\`\`\`${oldMessage.content.replace(/`/g, "'")}\`\`\``
                },
                {
                    name: `> New message :`,
                    value: `\`\`\`${newMessage.content.replace(/`/g, "'")}\`\`\``
                },
                {
                    name: `> Timestamp :`,
                    value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(newMessage.createdTimestamp / 1000)}:R>**`
                }
            ],
            components: [row]
        }, logsChannel).catch(() => { })
    }
    catch { }
};
