const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const model = require('../../database/models/badge');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('message')
        .setDescription('Post preset messages')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Select a message')
                .setRequired(true)
                .addChoices(
                    { name: 'Information', value: 'information' },
                    { name: 'Rules', value: 'rules' },
                    { name: 'Applications', value: 'applications' },
                    { name: 'Helpdesk', value: 'helpdesk' },
                    { name: 'Network', value: 'network' },
                    { name: 'Bot-Info', value: 'botinfo' },
                    { name: 'Bot-Badges', value: 'badges' },
                    { name: 'Bot-Béta', value: 'beta' },
                    { name: 'Bot-Credits', value: 'credits' }
                )
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        model.findOne({ User: interaction.user.id }, async (err, data) => {
            if (data && data.FLAGS.includes("DEVELOPER")) {

                const message = interaction.options.getString('message');

                client.succNormal({
                    text: `Message has been sent successfully!`,
                    type: 'ephemeraledit'
                }, interaction);

                if (message == "information") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<:information1:1098972252462141530> ・ Information`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024",
                            fields: [
                                {
                                    name: `<a:Pika_Hi:1099234677799260171> ┆ Welcome to Helix Support!`,
                                    value: `**>  Welcome to your support server! We focus on our bots. Stay up to date, ask your questions and test out our bots.\n**`,
                                },
                                {
                                    name: `<:bot_question_mark:1099014442831859774>┆What can I do here?`,
                                    value: `**> <:whitearrow:1099256019609211021> Read the latest news of bot \n> <:whitearrow:1099256019609211021> Test bot commands\n> <:whitearrow:1099256019609211021> Ask questions\n> <:whitearrow:1099256019609211021> Get help with setting up the bot in your server. \n**`,
                                },
                                {
                                    name: `<:bot:1099212006298501200> ┆ What is Helix?`,
                                    value: `**> You can find this information in the <#1092066107663339551> channel.\n**`,
                                },
                                {
                                    name: `<:helix_link:1099222608353951784>┆Other servers from us`,
                                    value: `**> [Tech server](https://discord.gg/CGkXX6nNcD) - Get help with code and tech while you read the latest news\n**`,
                                },
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })
                }

                if (message == "rules") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<:gc_rules_white:1099237400045170698> ・ Rules`,
                            author: {
                                name: "Mindforge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                            desc: `**> These are our server rules. Please stick to this to keep it fun for everyone. The Admins and Mods will Timeout/Kick/Ban per discretion**`,
                            fields: [
                                {
                                    name: `<:white_one:1099229024695361617> Be respectful`,
                                    value: `**> You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.**`,
                                },
                                {
                                    name: `<:white_two:1099229423804354623> No Inappropriate Language`,
                                    value: `**> The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.**`,
                                },
                                {
                                    name: `<:white_three:1099230984655880210> No spamming`,
                                    value: `**> Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.**`,
                                }, {
                                    name: `<:wwhite_four:1099231526794829874> No pornographic/adult/other NSFW material`,
                                    value: `**> This is a community server and not meant to share this kind of material.**`,
                                },
                                {
                                    name: `<:wwhite_five:1099231567408287784> No advertisements`,
                                    value: `**> We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)**`,
                                },
                                {
                                    name: `<:wwhite_six:1099263115465596949> No offensive names and profile pictures`,
                                    value: `**> You will be asked to change your name or picture if the staff deems them inappropriate.**`,
                                },
                                {
                                    name: `<:wwhite_seven:1099263741796814898> Server Raiding`,
                                    value: `**> Raiding or mentions of raiding are not allowed.**`,
                                },
                                {
                                    name: `<:wwhite_eight:1099264032294318130> Direct & Indirect Threats`,
                                    value: `**> Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.**`,
                                },
                                {
                                    name: `<:white_nine:1099264503729885244> Follow the Discord Community Guidelines`,
                                    value: `**> You can find them here: https://discordapp.com/guidelines**`,
                                },
                                {
                                    name: `<:white_ten:1099264981209448548> Do not join voice chat channels without permissions of the people already in there`,
                                    value: `**> If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first**`,
                                }
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })
                }

                if (message == "applications") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<:application:1093958760638201946> ・ Applications`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024",
                            desc: `**> What could be more fun than working at the best bot/server? We regularly have spots for new positions that you can apply for !!**\n\n**> But... what can you expect?**\n`,
                            fields: [
                                {
                                    name: `<:group:1099043617991041055> ┆ A very nice team`,
                                    value: `**> In the MindForge Network team there is always a pleasant atmosphere and everyone is treated equally!**`,
                                },
                                {
                                    name: `<a:diamonds:1099239297141444649> ┆ Access to the beta program`,
                                    value: `**> Get access to unreleased Bot features with your own server! You are a real Bot tester!**`,
                                },
                                {
                                    name: `<a:Discord_Badges:1099240005404209213> ┆ A nice rank and badge`,
                                    value: `**> You will get a nice rank in the server and a team badge in our userinfo command. Everyone can see that you contribute to the team**`,
                                },
                                {
                                    name: `<:pepe_reading:1099244541602701402> ┆ Learn and grow`,
                                    value: `**> We understand that you don't always understand everything right away! At Bot, we give you the opportunity to learn new things and get better at the position. You can also grow into the management team in the future!**`,
                                },
                                {
                                    name: `<a:pepe_brains:1099245152121409606> ┆ What does everything mean?`,
                                    value: `**> Moderator/Support : You keep yourself busy with the server that everything is and remains fun for everyone! Chat with us and keep the overview and help people with their questions.**`/* **\n**> Marketing** \n**> We also want to grow and we do that with a great marketing team! You know better than anyone how to make a server grow well**`*/,
                                },
                                {
                                    name: `<:uo_paper:1099220386253639741> ┆ Apply?`,
                                    value: `**> Create a ticket to receive your application!**`,
                                }
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })
                }

                if (message == "helpdesk") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<:bot_support_ticket:1099273924912631818> ・ Helpdesk`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024",
                            desc: `**> What could be more fun than working at the best bot/server? We regularly have spots for new positions that you can apply for** \n**> But... what can you expect?**`,
                            fields: [
                                {
                                    name: `❓┆ I have a question!`,
                                    value: `**> We advise you to ask your question in <#1092316504697098310> first. Here there are often already team members or other people who can help you. If it still doesn't work, create a ticket.**`,
                                },
                                {
                                    name: `${client.emotes.normal.paper} ┆ Ticket Rules`,
                                    value: `**> 1. Be patient so don't tag unnecessarily \n> 2. Only open a maximum of 1 ticket at a time \n> 3. No inappropriate behavior in tickets \n> 4. Don't make a ticket for nonsense.**`,
                                },
                                {
                                    name: `${client.emotes.normal.clock} ┆ Response time`,
                                    value: `**> <:whitearrow:1099256019609211021> 08:00 - 16:00 <:whitedash:1102566347222818867> (+/- 1 hour) \n> <:whitearrow:1099256019609211021> 16:00 - 22:00 <:whitedash:1102566347222818867> (+/- 30 minutes) \n> <:whitearrow:1099256019609211021> 22:00 - 08:00 <:whitedash:1102566347222818867> (+/- 1+ hour)**`,
                                },
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })

                }

                if (message == "network") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<a:hackerman:1100383533685547028> ・ Network`,
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256"
                            },
                            desc: `**> MindForge Network is a network that consists of 3 parts in a single server. Each part has its own function. One is for tech/coding and the other for support. We also have 1 extra part for ban appeals, read all information below :**`,
                            fields: [
                                {
                                    name: `<:Server:1099343664024649870> ┇ MindForge`,
                                    value: `**> This is server's 1st part that mainly focused on everything that revolves around tech. For example, think of encryption, programming or all new gadgets. Meet new people or learn more about tech yourself!. You can join this server by clicking [this](https://discord.gg/MindForge) link.**`,
                                },
                                {
                                    name: `${client.emotes.badges.bot} ┇ Bot Support`,
                                    value: `**> This is server's 2nd part which is for bot help. All information about this part can be found in here. You can get the link from this server to click on [this](https://discord.gg/MindForge) link.**`,
                                },
                                {
                                    name: `<:ban_hammer:1099653130267922482> ┇ MindForge Ban Appeal`,
                                    value: `**> This is server's 3rd part and is for the people who are banned from the bots. You can create a ticket here to request an unban and to participate in the servers again or to be able to use the bots again. You can join this server by clicking [this](https://discord.gg/MindForge) link.**`,
                                },
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })

                }

                if (message == "botinfo") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `${client.emotes.normal.info} ・ Bot(s) Information`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                            desc: `**> Outside of a community we also maintain 2 public bots. These bots are all made to make your server better!**`,
                            fields: [
                                {
                                    name: `${client.emotes.badges.bot} ┆ What is Helix?`,
                                    value: `**> Helix is a bot with which you can run your entire server! With tons of commands, we have a large bot with many options to improve your server and the best part is that it is completely in slash commands! You know what else is beautiful? All of this is [ FREE ] to use!**`,
                                },
                                {
                                    name: `${client.emotes.badges.bot} ┆ What is Helios?`,
                                    value: `**> Helios was created for additional music. This way you never get in each other's way when someone is already listening to music. Furthermore, this bot contains moderation and levelling system and the best part is that it works on both prefix and slash commands!**`,
                                },
                                {
                                    name: `<:invite:1099209986497859634> ┆ How do I invite the bots?`,
                                    value: `**> You can invite the bots by doing \`/invite\` or by clicking on the links below : \n\n> Helix Invite - [Invite Here](${client.config.discord.botInvite})\n> Helios Invite - [Invite Here](https://discord.com/api/oauth2/authorize?client_id=1086974320393326633&permissions=277297293424&scope=applications.commands%20bot)**`,
                                },
                                {
                                    name: `<:bot_support_ticket:1099273924912631818> ┆ How do I get help when needed?`,
                                    value: `**> You can ask your questions in the general chat or for further information you can take a look in <#1092316504697098310>.**`,
                                },
                            ],
                            footer: {
                                text: `© MindForge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })

                }

                if (message == "badges") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel)
                     .then(() => {
                         client.embed({
                             title: `🥇・Badges`,
                             thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                             desc: `**> We at Bot have a special badge system! You can find your badge via the userinfo command. Read below what each badge means :**`,
                             fields: [
                                 {
                                     name: `${client.emotes.badges.bot}┆Bot badge`,
                                     value: `**> This badge is only available for the Helix. This way you can see even better that they belong together.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.developer}┆Developer badge`,
                                     value: `**> This badge is only available to Bot developers. This shows that they are official developers of the Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.management}┆Management badge`,
                                     value: `**> You can get this badge if you are an official management member of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.team}┆Team badge`,
                                     value: `**> You can get this badge if you are an official team member of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.support}┆Support badge`,
                                     value: `**> You can get this badge if you are an official support member of team Bot.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.moderator}┆Moderator badge`,
                                     value: `**> You can get this badge if you are an official moderator of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.marketing}┆Marketing badge`,
                                     value: `**> You can get this badge if you are an official marketing member of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.event}┆Organization badge`,
                                     value: `**> You can get this badge if you are an official organization member of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.designer}┆Designer badge`,
                                     value: `**> You can get this badge if you are an official designer of team Helix.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.booster}┆Booster badge`,
                                     value: `**> You can get this badge if you have boosted a server within our network.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.partner}┆Partner badge`,
                                     value: `**> You can get this badge if you are official partnerd with our server.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.bug}┆Bug Hunter badge`,
                                     value: `**> You can get this badge if you have reported more than 20 bugs in our bot.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.supporter}┆Supporter badge`,
                                     value: `**> You can get this badge if you have given something to Bot to improve the bot even more.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.voter}┆Voter badge`,
                                     value: `**> You can get this badge if you have voted for our bots or servers.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.vip}┆Vip badge`,
                                     value: `**> You can get this badge if you have bought the vip role in the economy system.**`,
                                 },
                                 {
                                     name: `${client.emotes.badges.active}┆Active badge`,
                                     value: `**> You can get this badge if you have bought the active role in the economy system.**`,
                                 }
                             ],
                             footer: {
                                 text: `© MindForge - 2023`,
                                 iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                             }
                         }, interaction.channel)
                    })

                }

                if (message == "beta") {
                    client.simpleEmbed({
                        image: `https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `<:bug:1099039556747149414>・Beta`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            },
                            thumbnail: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=256",
                            desc: `**> The Bot Beta program is a program for new updates that still contains some bugs. Because of this program there are fewer bugs at the release! Everything happens via another bot so that the current bot users are not bothered by the beta testing.**`,
                            fields: [
                                {
                                    name: `📃┆Requirements for participation`,
                                    value: ` **> <:whitearrow:1099256019609211021> Minimum 100 members in the server\n> <:whitearrow:1099256019609211021> No test servers\n> <:whitearrow:1099256019609211021> Following the Discord and Bot TOS\n> <:whitearrow:1099256019609211021> Active server**`,
                                },
                                {
                                    name: `❓┆How does it work?`,
                                    value: ` **> You are going to use a beta bot. This does mean that the bot does not work 100% on some points. Keep this in mind when you sign up!**`,
                                },
                                {
                                    name: `💼┆I want to apply!`,
                                    value: ` **> Nice that you want to participate in Bot! We ask you to create a ticket in us <#1092064964660969564> We will send a form and possibly additional information \n\n> [ Pay attention! ] When the update is out you will be removed from our program!**`,
                                }
                            ],
                            footer: {
                                text: `© Mindforge - 2023`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })

                }

                /*if (message == "credits") {
                    client.simpleEmbed({
                        image: `https://media.discordapp.net/attachments/937337957419999272/938725907659644928/techpoint_channel_banner_credits.png?width=813&height=221`
                    }, interaction.channel).then(() => {
                        client.embed({
                            title: `${client.user.username}・Dcredits`,
                            author: {
                                name: "MindForge",
                                iconURL: "https://media.discordapp.net/attachments/937337957419999272/937797574440681472/techpoint_logo-min.jpg?width=812&height=812"
                            },
                            thumbnail: "https://media.discordapp.net/attachments/937337957419999272/937463192265846784/techpoint_logo_Bot.jpg?width=812&height=812",
                            fields: [
                                {
                                    name: `ℹ️┆What are Dcredits?`,
                                    value: `Dcredits are credits you get when you perform certain actions! You can exchange this for nice benefits for you and your server`,
                                },
                                {
                                    name: `❓┆How do you get Dcredits?`,
                                    value: `Currently you only get Dcredits when you vote on Bot. You can do this on top.gg! The credits will then be automatically added to your account!`,
                                },
                                {
                                    name: `💱┆What can you exchange Dcredits for?`,
                                    value: `- Bot background pack (8 credits per pack)\n- Bot logo pack (6 credits per pack)\n- Bot sticker pack (5 credits per pack)\n- Bot 1 year pack (10 credits per pack)`,
                                },
                                {
                                    name: `🎁┆How do I redeem Dcredits?`,
                                    value: `For a background pack: \`/dcredits backgroundpack\`\nFor a logo pack: \`/dcredits logopack\`\nFor a sticker pack: \`/dcredits stickerpack\`\nFor a 1 year pack: \`/dcredits 1yearpack\``,
                                },
                                {
                                    name: `🐞┆I have discovered a bug is the system`,
                                    value: `If something went wrong with your credits? Open a ticket in our <#897213893624102965> and we will solve this as soon as possible!`,
                                }
                            ],
                            footer: {
                                text: `© TechPoint - 2022`,
                                iconURL: "https://cdn.discordapp.com/avatars/1086901924667859004/1d141b6cde54e81c4440d1de1d5b3187.png?size=1024"
                            }
                        }, interaction.channel)
                    })

                }*/
            }
            else {
                return client.errNormal({ text: "Only Helix developers are allowed to do this", editreply: true }, interaction);
            }
        })
    },
}; 