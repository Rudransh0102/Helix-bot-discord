const discord = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => {
    let types = {
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
    }

    const logsChannel = await client.getLogs(newChannel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Thread created`,
        desc: `**> A thread has been created**`,
        fields: [
            {
                name: `> Old name :`,
                value: `** <:whitearrow:1099256019609211021> ${oldChannel.name}**`
            },
            {
                name: `> New name :`,
                value: `** <:whitearrow:1099256019609211021> ${newChannel.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${newChannel.id}**`
            },
            {
                name: `> Category :`,
                value: `** <:whitearrow:1099256019609211021> ${newChannel.parent}**`
            },
            {
                name: `> Channel :`,
                value: `** <:whitearrow:1099256019609211021> <#${newChannel.id}>**`
            },
            {
                name: `> Type :`,
                value: `** <:whitearrow:1099256019609211021> ${types[newChannel.type]}**`
            }
        ]
    }, logsChannel).catch(() => { })
};