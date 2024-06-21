const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `${client.emotes.normal.tv}┆Activities`,
            value: `> \`/activities\``,
            inline: true
        },
        {
            name: `🚫┆AFK`,
            value: `> \`/afk help\``,
            inline: true
        },
        {
            name: `<a:ANNOUNCEMENT:1099221319549194262> ┆ Announcement`,
            value: `> \`/announcement help\``,
            inline: true
        },
        {
            name: `<:AutoModBadge:1102447107383767150>┆Auto mod`,
            value: `> \`/automod help\``,
            inline: true
        },
        {
            name: `⚙️┆Auto setup`,
            value: `> \`/autosetup help\``,
            inline: true
        },
        {
            name: `${client.emotes.normal.birthday}┆Birthday`,
            value: `> \`/birthdays help\``,
            inline: true
        },
        {
            name: `${client.emotes.badges.bot}┆Bot`,
            value: `> \`/bot help\``,
            inline: true
        },
        {
            name: `🎰┆Casino`,
            value: `> \`/casino help\``,
            inline: true
        },
        {
            name: `<:UB_Settings:1102448246305062983>┆Configuration`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `${client.emotes.normal.slash}┆Custom commands`,
            value: `> \`/custom-commands help\``,
            inline: true
        },
        {
            name: `<a:Pepe_credit_card:1098974556397502555>┆Dcredits`,
            value: `> \`/dcredits help\``,
            inline: true
        },
        {
            name: `<:money:1099020939007631470>┆Economy`,
            value: `> \`/economy help\``,
            inline: true
        },
        {
            name: `<:helix_family:1099668877845213265>┆Family`,
            value: `> \`/family help\``,
            inline: true
        },
        {
            name: `<:funnykardia:1102448917498568704>┆Fun`,
            value: `> \`/fun help\``,
            inline: true
        },
        {
            name: `<:peepoStonedGamer:1099692978890608772>┆Games`,
            value: `> \`/games help\``,
            inline: true
        },
        {
            name: `🥳┆Giveaway`,
            value: `> \`/giveaway help\``,
            inline: true
        },
        {
            name: `<:UB_Settings:1102448246305062983>┆Guild settings`,
            value: `> \`/guild help\``,
            inline: true
        },
        {
            name: `🖼┆Images`,
            value: `> \`/images help\``,
            inline: true
        },
        {
            name: `<:invite:1099209986497859634>┆Invites`,
            value: `> \`/invites help\``,
            inline: true
        },
        {
            name: `<a:level_up:1099286047466213456>┆Leveling`,
            value: `> \`/levels help\``,
            inline: true
        },
        {
            name: `<:message1:1099268715859673099>┆Messages`,
            value: `> \`/messages help\``,
            inline: true
        },
        {
            name: `<:Moderator:1100410956057673779>┆Moderation`,
            value: `> \`/moderation help\``,
            inline: true
        },
        {
            name: `<a:PanMusicJams:1101887891992494190>┆Music`,
            value: `> \`/music help\``,
            inline: true
        },
        {
            name: `<:noted:1101786360861425714>┆Notepad`,
            value: `> \`/notepad help\``,
            inline: true
        },
        {
            name: `${client.emotes.normal.user}┆Profile`,
            value: `> \`/profile help\``,
            inline: true
        },
        {
            name: `<:helix_radio:1101901495189909575>┆Radio`,
            value: `> \`/radio help\``,
            inline: true
        },
        {
            name: `<:BlobCool:1102454223444119593>┆Reaction roles`,
            value: `> \`/reactionroles help\``,
            inline: true
        },
        {
            name: `<:searching:1099218734192799835>┆Search`,
            value: `> \`/search help\``,
            inline: true
        },
        {
            name: `<:marketing:1099053747939856455>┆Server stats`,
            value: `> \`/serverstats help\``,
            inline: true
        },
        {
            name: `⚙️┆Setup`,
            value: `> \`/setup help\``,
            inline: true
        },
        {
            name: `<a:DD_peepoDJ:1102455690481651783>┆Soundboard`,
            value: `> \`/soundboard help\``,
            inline: true
        },
        {
            name: `<:Chat_2:1099291073727184906>┆Sticky messages`,
            value: `> \`/stickymessages help\``,
            inline: true
        },
        {
            name: `💡┆Suggestions`,
            value: `> \`/sugestions help\``,
            inline: true
        },
        {
            name: `🤝┆Thanks`,
            value: `> \`/thanks help\``,
            inline: true
        },
        {
            name: `<:bot_support_ticket:1099273924912631818>┆Tickets`,
            value: `> \`/tickets help\``,
            inline: true
        },
        {
            name: `<:tools:1102458154521989180>┆Tools`,
            value: `> \`/tools help\``,
            inline: true
        },
        {
            name: `<:voice_chat:1099408667100598333>┆Voice`,
            value: `> \`/voice help\``,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('<:ArrowBackward:1095137898262695937>')
                            .setStyle(Discord.ButtonStyle.Secondary),
                            //.setDisabled( page === 1),


                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('<:ArrowForward:1099642138817462293>')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        /*new Discord.ButtonBuilder()
                            .setLabel("Support server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),*/
                    );

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: `${client.emotes.normal.slash}`,
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
                                    emoji: "<:Support:1099042098432462990>",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: `${client.emotes.normal.paper}`,
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `❓・Help panel`,
                    desc: `**> View all command categories in the bot here!**`, /*\n\n[Website](https://corwindev.nl) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,*/
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `**> View all command categories in the bot here!\n**`, /*> [Website]() | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/)**`,*/
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `**> View all command categories in the bot here! \n\n**`, /*> [Website]() | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/)**`,*/
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 