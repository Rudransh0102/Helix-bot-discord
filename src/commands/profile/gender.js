const Schema = require('../../database/models/profile');
const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId('gender-setup')
                .setPlaceholder('❌┆Nothing selected')
                .addOptions(
                    {
                        emoji: "<:male:1101893341538435324>",
                        label: `Male`,
                        value: `Male`,
                    },
                    {
                        emoji: "<:female:1101893365395619900>",
                        label: `Female`,
                        value: `Female`,
                    },
                    {
                        emoji: "<:TransGender:1101893315802181693>",
                        label: `Other`,
                        value: `Other`,
                    }
                );

            const row = new Discord.ActionRowBuilder()
                .addComponents(menu)

            client.embed({
                desc: `**> Select a gender : \n\n> <:whitearrow:1099256019609211021> <:male:1101893341538435324> Male \n\n> <:whitearrow:1099256019609211021> <:female:1101893365395619900> Female \n\n> <:whitearrow:1099256019609211021> <:TransGender:1101893315802181693> Others\n**`,
                type: 'editreply',
                components: [row],
            }, interaction).then(msg => {
                const filter = i => i.user.id === interaction.user.id;

                function getEmoji(gender) {
                    switch (gender) {
                        case 'Male':
                            return "<:male:1101893341538435324>";
                        case 'Female':
                            return "<:female:1101893365395619900>";
                        case 'Other':
                            return "<:TransGender:1101893315802181693>";
                        default:
                            return "";
                    }
                }
                

                interaction.channel.awaitMessageComponent({ filter, max: 1, componentType: Discord.ComponentType.StringSelect }).then(i => {
                    if (i.customId == 'gender-setup') {
                        data.Gender = i.values[0];
                        data.save();

                        client.succNormal({
                            text: `Set your gender to _ _${getEmoji(i.values[0])}  ` + i.values[0],
                            type: 'editreply',
                            components: [],
                        }, interaction);
                    }
                })
            })
        }
        else {
            return client.errNormal({ error: "No profile found! Open a profile with createprofile", type: 'editreply' }, interaction);
        }
    })
}

 