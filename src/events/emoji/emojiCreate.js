const discord = require('discord.js');

module.exports = async (client, emoji) => {
    const logsChannel = await client.getLogs(emoji.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😛・Emoji created`,
        desc: `**> An emoji has been created**`,
        fields: [
            {
                name: `> Emoji :`,
                value: `** <:whitearrow:1099256019609211021> ${emoji}**`
            },
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${emoji.name}**`
            },
            {
                name: `> ID :`,
                value: `** ${emoji.id}**`
            },
            {
                name: `> Url :`,
                value: `** ${emoji.url}**`
            }
        ]
    }, logsChannel).catch(() => { })
};