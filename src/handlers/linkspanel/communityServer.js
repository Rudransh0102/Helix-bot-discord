const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "community-linkspanel") {
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
                                    emoji: "<:Support:1099042098432462990>",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Invite Bot`,
                                    description: `Invite Bot to your server`,
                                    emoji: "<:invite:1099209986497859634>",
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
                                    emoji: `<:helix_link:1093959383626551356>`,
                                    value: "top.gg-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                    .addComponents(

                        new Discord.ButtonBuilder()
                            .setLabel("Community Server")
                            .setURL("https://discord.gg/CGkXX6nNcD")
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `🌍・Community Server`,
                    desc: `**> Step into our vibrant community server and connect with like-minded individuals who share your passion for all things bot-related!**`,
                    image: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                    url: client.config.discord.botInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 