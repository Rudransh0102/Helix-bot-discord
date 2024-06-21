const discord = require('discord.js');

module.exports = async (client, oldSticker, newSticker) => {
    const logsChannel = await client.getLogs(newSticker.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `😜・Sticker updated`,
        desc: `**> A sticker has been updated**`,
        fields: [
            {
                name: `> Before :`,
                value: `** <:whitearrow:1099256019609211021> ${oldSticker.name}**`
            },
            {
                name: `> After :`,
                value: `** <:whitearrow:1099256019609211021> ${newSticker.name}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${newSticker.id}**`
            }
        ]
    }, logsChannel).catch(() => { })
};