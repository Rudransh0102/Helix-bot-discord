const discord = require('discord.js');

module.exports = async (client, channel, time) => {
    let types = {
        0: "Text Channel",
        2: "Voice Channel",
        4: "Category",
        5: "News Channel",
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
        13: "Stage Channel",
        14: "Category",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔧・Channel pins updated`,
        desc: `**> Channel pins have been updated**`,
        fields: [
            {
                name: `> Name :`,
                value: `**<:whitearrow:1099256019609211021> ${channel.name}**`
            },
            {
                name: `> ID :`,
                value: `**<:whitearrow:1099256019609211021> ${channel.id}**`
            },
            {
                name: `> Category :`,
                value: `**<:whitearrow:1099256019609211021> ${channel.parent}**`
            },
            {
                name: `> Channel : `,
                value: `**<:whitearrow:1099256019609211021> <#${channel.id}>**`
            },
            {
                name: `> Type :`,
                value: `**<:whitearrow:1099256019609211021> ${types[channel.type]}**`
            },
            {
                name: `> Pinned at :`,
                value: `**<:whitearrow:1099256019609211021> <t:${(time / 1000).toFixed(0)}>**`
            }
        ]
    }, logsChannel).catch(() => { })
};