const discord = require('discord.js');

module.exports = async (client, ban) => {
    const logsChannel = await client.getLogs(ban.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔧・Member banned`,
        desc: `A user has been banned`,
        thumbnail: ban.user.avatarURL({ size: 4096 }),
        fields: [
            {
                name: `> User :`,
                value: `** <:whitearrow:1099256019609211021> ${ban.user}**`
            },
            {
                name: `> Tag :`,
                value: `** <:whitearrow:1099256019609211021> ${ban.user.tag}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${ban.user.id}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(ban.createdTimestamp / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};