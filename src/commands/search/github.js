const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    let name = interaction.options.getString('name');

    const r = await pop.github(name).catch(() => {
        return client.errNormal({
            error: `No account found with the username: ${name}`,
            type: 'editreply'
        }, interaction)
    
    })

    client.embed({
        title: `🏷️・${r.name}`,
        thumbnail: r.avatar,
        url: r.url,
        fields: [
            {
                name: `${client.emotes.normal.user} ┇Name`,
                value: `**> ${r.name}**`,
                inline: true,
            },
            {
                name: "<:SA_pepe_busy:1101953841752195152> ┇Company",
                value: `**> ${r.company}**`,
                inline: true,
            },
            {
                name: "<:message1:1099268715859673099> ┇Bio",
                value: `**> ${r.bio}**`,
                inline: true,
            },
            {
                name: "<:folder:1099283463770742897> ┇Public Repositories",
                value: `**> ${r.public_repos}**`,
                inline: true,
            },
            {
                name: `${client.emotes.normal.clock} ┇Created At`,
                value: `> <t:${Math.round(new Date(r.created_at).getTime() / 1000)}>`,
                inline: true,
            },
        ], type: 'editreply'
    }, interaction)
}

 