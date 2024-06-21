const Discord = require('discord.js');

const Schema = require("../../database/models/birthday");

module.exports = async (client, interaction, args) => {
    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (!data) return client.errNormal({ 
            error: "<:Cross:1093511027943014490> No birthday found !",
            type: 'editreply' 
        }, interaction);

        Schema.findOneAndDelete({ Guild: interaction.guild.id, User: interaction.user.id }).then(() => {
            client.succNormal({ 
                text: " <a:a_check:1093511759568052254> Deleted your birthday successfully !", 
                type: 'editreply' 
            }, interaction)
        })
    })
}

 