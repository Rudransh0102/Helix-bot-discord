const discord = require('discord.js');

module.exports = async (client, role) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Role deleted`,
        desc: `A role has been deleted`,
        fields: [
            {
                name: `> Role :`,
                value: `** <:whitearrow:1099256019609211021> ${role}**`
            },
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${role.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${role.id}**`
            },
            {
                name: `> Color :`,
                value: `** <:whitearrow:1099256019609211021> ${role.hexColor}**`
            },
            {
                name: `> Position :`,
                value: `** <:whitearrow:1099256019609211021> ${role.position}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};