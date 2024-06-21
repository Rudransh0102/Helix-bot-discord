const discord = require('discord.js');

module.exports = async (client, role, oldName, newName) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Role name updated`,
        desc: `**>A role has been updated**`,
        fields: [
            {
                name: `> Role :`,
                value: `** <:whitearrow:1099256019609211021> ${role}**`
            },
            {
                name: `> Before :`,
                value: `** <:whitearrow:1099256019609211021> ${oldName}**`
            },
            {
                name: `> After :`,
                value: `** <:whitearrow:1099256019609211021> ${newName}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${role.id}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};