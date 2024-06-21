const discord = require('discord.js');

module.exports = async (client, oldEmoji, newEmoji) => {
    const logsChannel = await client.getLogs(newEmoji.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😛・Emoji updated`,
        desc: `**> An emoji has been updated**`,
        fields: [
            {
                name: `> Emoji :`,
                value: `** <:whitearrow:1099256019609211021> ${newEmoji}**`
            },
            {
                name: `> Before :`,
                value: `** <:whitearrow:1099256019609211021> ${oldEmoji.name}**`
            },
            {
                name: `> After :`,
                value: `** <:whitearrow:1099256019609211021> ${newEmoji.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${newEmoji.id}**`
            }
        ]
    }, logsChannel).catch(() => { })
};