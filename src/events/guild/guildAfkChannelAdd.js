const Discord = require('discord.js');

module.exports = async (client, guild, afkChannel) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `${client.emotes/normalize.check}・New AFK channel`,
        desc: `**> An AFK channel has been added to the server**`,
        fields: [
            {
                name: `> Channel :`,
                value: `**<:whitearrow:1099256019609211021> ${afkChannel}**`
            },
            {
                name: `> Name :`,
                value: `**<:whitearrow:1099256019609211021> ${afkChannel.name}*`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${afkChannel.id}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(afkChannel.createdTimestamp / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};