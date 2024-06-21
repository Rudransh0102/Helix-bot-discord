const discord = require('discord.js');

module.exports = async (client, channel, oldName, newName) => {
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
        title: `🔧・Channel name adjusted`,
        desc: `**> One channel name modified**`,
        fields: [
            {
                name: `> Old Name :`,
                value: `**<:whitearrow:1099256019609211021> ${oldName}**`
            },
            {
                name: `> New Name :`,
                value: `**<:whitearrow:1099256019609211021> ${newName}**`
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
                name: `> Type`,
                value: `**<:whitearrow:1099256019609211021> ${types[channel.type]}**`
            }
        ]
    }, logsChannel).catch(() => { })
};