const discord = require('discord.js');

module.exports = async (client, sticker) => {
    const logsChannel = await client.getLogs(sticker.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😜・Sticker deleted`,
        desc: `**> A sticker has been deleted**`,
        fields: [
            {
                name: `> Name`,
                value: `** <:whitearrow:1099256019609211021> ${sticker.name}**`
            },
            {
                name: `> ID`,
                value: `** <:whitearrow:1099256019609211021> ${sticker.id}**`
            }
        ]
    }, logsChannel).catch(() => { })
};