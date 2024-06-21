const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "changelogs-Bothelp") {
                interaction.deferUpdate();

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "<:slash:1098972701441413140>",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
                                    emoji: "<:invite:1099209986497859634>",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "<:bot_question_mark:1099014442831859774>",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "<:uo_paper:1099220386253639741>",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: "<a:verified:1092156142186139698>・Changelogs",
                    desc: `**> Get a summary of the recent updates and changes made to the bot.**`,
                    thumbnail: client.user.avatarURL({ size: 1024 }),
                    fields: [
            	        {
                            name: "<a:ANNOUNCEMENT:1099221319549194262>┆Alert!",
                            value: '**> This is the changelogs of the bot, here you can see the changes that have been made to the bot.**',
                            inline: false,
                        },
                        {
                            name: "<:uo_paper:1099220386253639741>┆Changelogs",
                            value: '**> 01/05/2023 - Updated the bot to the latest version of discord.js (v14.9.0).**',
                            inline: false,
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 