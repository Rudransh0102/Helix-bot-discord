const Discord = require('discord.js');

module.exports = async (client, guild, url) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:helix_link:1093959383626551356>   •   New Vanity URL`,
        desc: `**> The server vanity URL has been updated**`,
        fields: [
            {
                name: `> URL :`,
                value: `** <:whitearrow:1099256019609211021> ${url}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021> <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};