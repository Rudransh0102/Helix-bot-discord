const discord = require('discord.js');

module.exports = async (client, user, mod) => {
    const logsChannel = await client.getLogs(user.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:ban_hammer:1099653130267922482>    •   Member unwarned`,
        desc: `**> A user has been unwarned**`,
        fields: [
            {
                name: `> User :`,
                value: `** <:whitearrow:1099256019609211021> ${user}**`
            },
            {
                name: `> Tag :`,
                value: `** <:whitearrow:1099256019609211021> ${user.user.username}#${user.user.discriminator}**`
            },
            {
                name: `> ID :`,
                value: `** <:whitearrow:1099256019609211021> ${user.id}**`
            },
            {
                name: `> Moderator :`,
                value: `** <:whitearrow:1099256019609211021> ${mod} (${mod.id})**`
            }
        ]
    }, logsChannel).catch(() => { })
};