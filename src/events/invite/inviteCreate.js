const discord = require('discord.js');

module.exports = async (client, invite) => {
    const logsChannel = await client.getLogs(invite.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:invite:1099209986497859634>   •   Invite created`,
        desc: `**> A invite has been created**`,
        fields: [
            {
                name: `> Code :`,
                value: `** <:whitearrow:1099256019609211021> ${invite.code}**`
            },
            {
                name: `> Inviter :`,
                value: `** <:whitearrow:1099256019609211021> ${invite.inviter} (${invite.inviter.tag})**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(invite.createdTimestamp / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};