const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Nothing selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "<:bot_question_mark:1099014442831859774>",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Bot`,
                        description: `Invite Bot to your server`,
                        emoji: "<:invite:1099209986497859634>",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Community and Support Server`,
                        description: `Join the community & Support server!`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    /*{
                        label: `Top.gg`,
                        description: `Show the top.gg link`,
                        emoji: "📃",
                        value: "top.gg-linkspanel",
                    },*/
                ]),
        );

    client.embed({
        title: `<:helix_link:1093959383626551356> • ****Links****`,
        desc: `> **Get access to all Bot links! Choose the link you need in the menu below**`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 