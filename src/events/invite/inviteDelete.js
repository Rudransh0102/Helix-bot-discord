const discord = require('discord.js');

module.exports = async (client, invite) => {
    const logsChannel = await client.getLogs(invite.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:invite:1099209986497859634>   •   Invite deleted`,
        desc: `**> A invite has been deleted**`,
        fields: [
            {
                name: `> Code :`,
                value: `** <:whitearrow:1099256019609211021> ${invite.code}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(invite.createdTimestamp / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};