const discord = require('discord.js');

module.exports = async (client, channel) => {
    let types = {
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Thread created`,
        desc: `**> A thread has been created**`,
        fields: [
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${channel.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${channel.id}**`
            },
            {
                name: `> Category :`,
                value: `** <:whitearrow:1099256019609211021> ${channel.parent}**`
            },
            {
                name: `> Channel :`,
                value: `** <:whitearrow:1099256019609211021> <#${channel.id}>**`
            },
            {
                name: `> Type :`,
                value: `** <:whitearrow:1099256019609211021> ${types[channel.type]}**`
            }
        ]
    }, logsChannel).catch(() => { })
};