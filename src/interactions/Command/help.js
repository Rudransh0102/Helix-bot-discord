const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
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

        return client.embed({
            title: `❓・Help panel`,
            desc: `**> Welcome to Bot's help panel! We have made a small overview to help you! Make a choice via the menu below**`,
            image: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
            fields: [
                {
                    name: `❌ ┆ Menu doesn't work?`,
                    value: `**> Try resending the command. If you get no reaction, make sure you report the bug!**`
                },
                {
                    name: `${client.emotes.badges.bug} ┆ Found a bug?`,
                    value: `**> Report this with \`/report bug\`**`
                },
                {
                    name: `<:helix_link:1093959383626551356> ┆ Links`,
                    value: `**> [Invite](${client.config.discord.botInvite})**`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 