const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    const name = interaction.options.getString('name');

    const r = await pop.npm(name).catch(e => {
        return client.errNormal({ 
            error: "Package not found!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `<:folder:1099283463770742897>  •  ${r.name}`,
        fields: [
            {
                name: "<:message1:1099268715859673099> ┇ Name",
                value: `**> ${r.name}**`,
                inline: true,
            },
            {
                name: "🏷️┇Version",
                value: `**> ${r.version}**`,
                inline: true,
            },
            {
                name: `${client.emotes.normal.paper} ┇ Description`,
                value: `**> ${r.description}**`,
                inline: true,
            },
            {
                name: "⌨ ┇ Keywords",
                value: `**> ${r.keywords}**`,
                inline: true,
            },
            {
                name: "<:author:1099212610114695168> ┇ Author",
                value: `**> ${r.author}**`,
                inline: true,
            },
            {
                name: "<:folder:1099283463770742897> ┇ Downloads",
                value: `**> ${r.downloads_this_year}**`,
                inline: true,
            },
            {
                name: `${client.emotes.normal.clock} ┇ Last publish`,
                value: `<t:${Math.round(new Date(r.last_published).getTime() / 1000)}>`,
                inline: true,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 