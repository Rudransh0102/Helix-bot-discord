const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');

    const r = await pop.itunes(song).catch(e => {
        return client.errNormal({ 
            error: "Song not found!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `${client.emotes.normal.music}  •  ${r.name}`,
        thumbnail: r.thumbnail,
        url: r.url,
        fields: [
            {
                name: "<:message1:1099268715859673099> ┇ Name",
                value: `**> ${r.name}**`,
                inline: true,
            },
            {
                name: "<a:peepoSing:1101888996226904134> ┇ Artist",
                value: `**> ${r.artist}**`,
                inline: true,
            },
            {
                name: "<:uo_music:1093527825073590303> ┇ Album",
                value: `**> ${r.album}**`,
                inline: true,
            },
            {
                name: "<a:a1_music:1093523885321896047> ┇ Length",
                value: `**> ${r.length}**`,
                inline: true,
            },
            {
                name: "🏷️┇Genre",
                value: `**> ${r.genre}**`,
                inline: true,
            },
            /*{
                name: "💵┇Price",
                value: `${r.price}`,
                inline: true,
            },*/
            {
                name: `${client.emotes.normal.clock} ┇ Release Date`,
                value: `<t:${Math.round(new Date(r.release_date).getTime() / 1000)}>`,
                inline: true,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 