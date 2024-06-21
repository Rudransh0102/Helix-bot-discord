const discord = require('discord.js');

module.exports = async (client, oldEvent, newEvent) => {
    const logsChannel = await client.getLogs(newEvent.guildId);
    if (!logsChannel) return;

    client.embed({
        title: `🎡・Event updated`,
        desc: `**> An event has been updated**`,
        fields: [
            {
                name: `> Old Name :`,
                value: `** <:whitearrow:1099256019609211021> ${oldEvent.name}**`
            },
            {
                name: `> New Name :`,
                value: `** <:whitearrow:1099256019609211021> ${newEvent.name}**`
            },
            {
                name: `> Old Description :`,
                value: `** <:whitearrow:1099256019609211021> ${oldEvent.description || 'None'}**`
            },
            {
                name: `> New Description :`,
                value: `** <:whitearrow:1099256019609211021> ${newEvent.description || 'None'}**`
            },
            {
                name: `> Old Time :`,
                value: `** <:whitearrow:1099256019609211021> <t:${(oldEvent.scheduledStartTimestamp / 1000).toFixed(0)}>**`
            },
            {
                name: `> New Time :`,
                value: `** <:whitearrow:1099256019609211021> <t:${(newEvent.scheduledStartTimestamp / 1000).toFixed(0)}>**`
            },
            {
                name: `> Creator :`,
                value: ` **<:whitearrow:1099256019609211021> <@!${newEvent.creatorId}> (${newEvent.creatorId})**`
            },
            {
                name: `> Timestamp`,
                value: `*** <:whitearrow:1099256019609211021> <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};