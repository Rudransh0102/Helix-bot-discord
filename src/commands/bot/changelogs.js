const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "<:uo_paper:1099220386253639741>・Changelogs",
        desc: `The latest changes and updates to the bot.`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "<:uo_paper:1099220386253639741> ┆Changelogs",
                value: '01/03/2023 - Updated the bot to the latest version of discord.js (v14.9.0)',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 