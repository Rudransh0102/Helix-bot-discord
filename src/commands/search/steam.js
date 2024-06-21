const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
    try {
        const name = interaction.options.getString('name');

        const s = await pop.steam(name);
        
        if (!s) {
            return client.errNormal({
                error: "Application not found!",
                type: 'editreply'
            }, interaction);
        }

        await client.embed({
            title: `<:peepoStonedGamer:1099692978890608772>   •   ${s.name}`,
            thumbnail: s.thumbnail,
            fields: [
                {
                    name: `<:message1:1099268715859673099> ┇ Name`,
                    value: `**> ${s.name}**`,
                    inline: true,
                },
                {
                    name: `${client.emotes.normal.paper} ┇ Capital`,
                    value: `**> ${s.description}**`,
                    inline: false,
                },
                {
                    name: `${client.emotes.badges.developer} ┇ Developers`,
                    value: `**> ${s.developers.join(", ")}**`,
                    inline: true,
                },
                {
                    name: "☁┇Publishers",
                    value: `**> ${s.publishers.join(", ")}**`,
                    inline: true,
                },
                {
                    name: "<:Pepe_money:1099020886473969796> ┇ Price",
                    value: `**> ${s.price}**`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    } catch (error) {
        console.error(error);
        return client.errNormal({
            error: "An error occurred while fetching the application information.",
            type: 'editreply'
        }, interaction);
    }
};
