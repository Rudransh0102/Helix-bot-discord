const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = async (client, interaction, args) => {

    const language = interaction.options.getString('language');
    const text = interaction.options.getString('text');

    translate(text, { to: language }).then(res => {
        client.embed({
            title: `${client.emotes.normal.check}   •   Success!`,
            desc: `**> I have translated the following : **`,
            fields: [
                {
                    name: "<:upload:1102141073985372160> - Input",
                    value: `**> ${text}**`,
                    inline: false,
                },
                {
                    name: "<:Download:1102141100786982912> - Output",
                    value: `**> ${res.text}**`,
                    inline: false,
                },
            ],
            type: 'editreply'
        }, interaction);

    }).catch(err => {
        client.errNormal({
            error: err,
            type: 'editreply'
        }, interaction);
    })
}

 