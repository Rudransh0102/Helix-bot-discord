const discord = require('discord.js');

module.exports = async (client, sticker) => {
    const logsChannel = await client.getLogs(sticker.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😜・Sticker created`,
        desc: `**> A sticker has been created**`,
        fields: [
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${sticker.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${sticker.id}**`
            },
            {
                name: `> Url :`,
                value: `** <:whitearrow:1099256019609211021> ${sticker.url}**`
            }
        ]
    }, logsChannel).catch(() => { })
};