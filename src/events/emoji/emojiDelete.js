const discord = require('discord.js');

module.exports = async (client, emoji) => {
    const logsChannel = await client.getLogs(emoji.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😛・Emoji deleted`,
        desc: `**> An emoji has been deleted**`,
        fields: [
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${emoji.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${emoji.id}**`
            }
        ]
    }, logsChannel).catch(() => { })
};