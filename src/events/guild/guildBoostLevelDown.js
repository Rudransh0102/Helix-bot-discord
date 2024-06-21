const Discord = require('discord.js');

module.exports = async (client, guild, oldLevel, newLevel) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🆙・New boost level`,
        desc: `**> This server has returned to a new boost level**`,
        fields: [
            {
                name: `> Old level :`,
                value: `** <:whitearrow:1099256019609211021> ${oldLevel}**`
            },
            {
                name: `> New level :`,
                value: `** <:whitearrow:1099256019609211021> ${newLevel}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};