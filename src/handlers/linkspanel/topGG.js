const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        const totalGuilds = client.guilds.cache.size;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "top.gg-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Invite Bot`,
                                    description: `Invite Bot to your server`,
                                    emoji: "📨",
                                    value: "invite-linkspanel",
                                },
                                {
                                    label: `Community Server`,
                                    description: `Join the community server!`,
                                    emoji: "🌍",
                                    value: "community-linkspanel",
                                },
                                {
                                    label: `Top.gg`,
                                    description: `Show the top.gg link`,
                                    emoji: "📃",
                                    value: "top.gg-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                    .addComponents(

                        new Discord.ButtonBuilder()
                            .setLabel("Vote Now")
                            .setURL("https://top.gg/")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `${client.emotes.badges.voter} • Bot Vote`,
                      desc: `> **Join the crusade to get Helix Verified! Add it to as many servers as possible now!!**`,
                      fields: [
                        {
                          name: `${client.emotes.badges.active} • COMING SOON !!`,
                          value: `> **${totalGuilds}** servers`,
                          inline: true,
                        },
                      ],
                    image: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                    url: "https://top.gg/",
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 