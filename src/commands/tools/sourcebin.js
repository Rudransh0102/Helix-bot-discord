const Discord = require('discord.js');
const sourcebin = require('sourcebin');

module.exports = async (client, interaction, args) => {

    /*const language = interaction.options.getString('language');
    const code = interaction.options.getString('code');

    if (!language || !code) {
        return client.error('Please provide code and language.', interaction);
    }

    const bin = await sourcebin.create(
        [
            {
                content: `${code}`,
                language: `${language}`,
            },
        ],
        {
            title: '<:monitor:1098973656002080779>・Random Code',
            description: 'This code was uploaded via Bot',
        },
    ).then(value => {
        client.succNormal({
            text: `Your code has been posted!`,
            fields: [
                {
                    name: `<:helix_link:1099222608353951784>┇Link`,
                    value: `[Click here to see your code](${value.url})`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    })*/

    client.embed(
        {
          title: `${client.emotes.normal.bug} • ****Sourcebin****`,
          desc: `> **Join the crusade to get Helix Verified! Add it to as many servers as possible now!!**`,
          fields: [
            {
              name: `${client.emotes.badges.active} • ┇****COMING SOON !!****`,
              value: `> **${totalGuilds}** servers`,
              inline: true,
            },
          ],
          type: "editreply",
        },
        interaction
      );
    }