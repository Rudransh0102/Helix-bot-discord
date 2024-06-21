const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');

    client.succNormal({
        text: `Message has been sent successfully!`,
        type: 'ephemeraledit'
    }, interaction);

    if (message == "information") {
        client.simpleEmbed({
            image: `https://cdn.discordapp.com/attachments/843487478881976381/874742689017520128/Bot_banner_information.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `${client.emotes.normal.info} • ****Information****`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `**Get some information about the server**`,
                fields: [
                    {
                        name: `<a:Pika_Hi:1099234677799260171>┆Welcome to ${interaction.guild.name}!`,
                        value: `> Welcome to our hangout place! Meet new people here, play some games and participate in seasonal events! We are a server where we bring everyone together and we try to make it comfortable for everyone! Please be welcome and have some fun!\n`,
                    },
                    {
                        name: `<:bot_question_mark:1099014442831859774>┆What can I do here?`,
                        value: `> <:whitearrow:1099256019609211021> Meet new people! \n> <:whitearrow:1099256019609211021> Play many fun games! \n> <:whitearrow:1099256019609211021> Discover the seasons! \n> <:whitearrow:1099256019609211021> Participate in events! \n> <:whitearrow:1099256019609211021> And…. Last but not least, choose your own roles at <#1096863304426737685>!\n`,
                    },
                    {
                        name: `<:bot_support_ticket:1099273924912631818>┆How do I get help when needed?`,
                        value: `> You can make a ticket in <#1092064964660969564>! We are happy to help you with your questions here and offer support in your server!\n`,
                    },
                    {
                        name: `<:application:1093958760638201946>┆I want to help Bot to improve!`,
                        value: `> <:whitearrow:1099256019609211021> Go to applications and see what kind of jobs are available! \n> <:whitearrow:1099256019609211021> Or make a ticket and ask if you can help with certain things! \n\n> **We wish you a very nice and happy time here!**\n`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rules") {
        client.simpleEmbed({
            image: `https://cdn.discordapp.com/attachments/843487478881976381/874742702393131038/Bot_banner_rules.jpg`
        }, interaction.channel).then(async () => {
            await client.embed({
                title: `<:gc_rules_white:1099237400045170698> • Rules`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n > **These are our server rules. Please stick to this to keep it fun for everyone. The Admins and Mods will Timeout/Kick/Ban per discretion**`,
            }, interaction.channel)

            await client.embed({
                title: `<:white_one:1099229024695361617> ****Be respectful****`,
                desc: `> You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.`,
            }, interaction.channel)

            await client.embed({
                title: `<:white_two:1099229423804354623> ****No Inappropriate Language****`,
                desc: `> The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.`,
            }, interaction.channel)

            await client.embed({
                title: `<:white_three:1099230984655880210> ****No spamming****`,
                desc: `> Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.`,
            }, interaction.channel)

            await client.embed({
                title: `<:wwhite_four:1099231526794829874> ****No pornographic/adult/other NSFW material****`,
                desc: `> This is a community server and not meant to share this kind of material.`,
            }, interaction.channel)

            await client.embed({
                title: `<:wwhite_five:1099231567408287784> ****No advertisements****`,
                desc: `> We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)`,
            }, interaction.channel)

            await client.embed({
                title: `<:wwhite_six:1099263115465596949> ****No offensive names and profile pictures****`,
                desc: `> You will be asked to change your name or picture if the staff deems them inappropriate.`,
            }, interaction.channel)

            await client.embed({
                title: `<:wwhite_seven:1099263741796814898> ****Server Raiding****`,
                desc: `> Raiding or mentions of raiding are not allowed.`,
            }, interaction.channel)

            await client.embed({
                title: `<:wwhite_eight:1099264032294318130> ****Direct & Indirect Threats****`,
                desc: `> Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.`,
            }, interaction.channel)

            await client.embed({
                title: `<:white_nine:1099264503729885244> ****Follow the Discord Community Guidelines****`,
                desc: `> You can find them here: https://discordapp.com/guidelines`,
            }, interaction.channel)

            await client.embed({
                title: `<:white_ten:1099264981209448548> ****Do not join voice chat channels without permissions of the people already in there****`,
                desc: `> If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first`,
            }, interaction.channel)
        })
    }

    if (message == "applications") {
        client.simpleEmbed({
            image: `https://cdn.discordapp.com/attachments/843487478881976381/874742737415581786/Bot_banner_applications.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `<:application:1093958760638201946> • Applications`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n > What could be more fun than working at the best bot/server? We regularly have spots for new positions that you can apply for. \n\n> But... what can you expect?`,
                fields: [
                    {
                        name: `<:group:1099043617991041055>┆A very nice team`,
                        value: `> In the Bot team there is always a pleasant atmosphere and everyone is treated equally!`,
                    },
                    {
                        name: `<a:diamonds:1099239297141444649>|Access to the beta program`,
                        value: `> Get access to unreleased Bot features with your own server! You are a real Bot tester!`,
                    },
                    {
                        name: `<a:Discord_Badges:1099240005404209213>┆A nice rank and badge`,
                        value: `> You will get a nice rank in the server and a team badge in our userinfo command. Everyone can see that you contribute to the team`,
                    },
                    {
                        name: `<:pepe_reading:1099244541602701402>┆Learn and grow`,
                        value: `> We understand that you don't always understand everything right away! At Bot, we give you the opportunity to learn new things and get better at the position. You can also grow into the management team in the future!\n\n`,
                    },
                    {
                        name: `<a:pepe_brains:1099245152121409606>┆What does everything mean?`,
                        value: `\n<:whitearrow:1099256019609211021> **Moderator:** \n> You keep yourself busy with the server that everything is and remains fun for everyone! Chat with us and keep the overview \n\n <:whitearrow:1099256019609211021> **Marketing:** \n> We also want to grow and we do that with a great marketing team! You know better than anyone how to make a server grow well \n\n <:whitearrow:1099256019609211021> **Organization:** \n> You will ensure an even nicer atmosphere in the server! Together with a team you work on new and fun events to make the server even more fun!`,
                    },
                    {
                        name: `<:uo_paper:1099220386253639741>┆Apply?`,
                        value: `> Create a ticket to receive your application!`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "boosterperks") {
        client.simpleEmbed({
            image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `<a:ex_booster:1093520222239072286> • Booster Perks`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\n> **More options in the server? Become a real Bot Booster and get nice benefits for a nice experience. But what do you actually get?**`,
                fields: [
                    {
                        name: `<:thumbsup:1099280352029192232>┆Use external stickers`,
                        value: `> Use stickers from other servers in our server`,
                    },
                    {
                        name: `<:Voice:1099281386160001085>┆****Send TTS messages****`,
                        value: `> Send messages that have a sound attached`,
                    },
                    {
                        name: `<:blue_vip:1099053174104526848>┆Access to the hidden lounge`,
                        value: `> Get access to a private lounge and chat with other boosters!`,
                    },
                    {
                        name: `<:being_cool:1099282017696362527>┆Change your nickname`,
                        value: `> Change your name in the server. This is how you stand out in the server`,
                    },
                    {
                        name: `<a:private_thread:1099282630400282756>┆Create public/private threads`,
                        value: `> Create a thread in our text channels`,
                    },
                    {
                        name: `<a:C_INS_party:1098977279469699173>┆Private giveaways`,
                        value: `> Get access to fun exclusive giveaways`,
                    },
                    {
                        name: `<:folder:1099283463770742897>┆Send files in any channel`,
                        value: `> Send files in all channels where you can talk`,
                    },
                    {
                        name: `<:marketing:1099053747939856455>┆Get access to a special promotional channel`,
                        value: `> Get the opportunity to promote your own server in a special channel`,
                    },
                    {
                        name: `<:custom_role:1099285156285661205>┆Custom role of your choice`,
                        value: `> Create your own role that you can set yourself`,
                    },
                    {
                        name: `<a:ex_booster:1093520222239072286>┆Get the booster role + badge`,
                        value: `> Stand out with a nice booster role and a booster badge!`,
                    },
                    {
                        name: `<:monitor:1098973656002080779>┆Access to new bèta updates in Bot`,
                        value: `> We'll give your server access to updates that aren't out yet! How nice is that?`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "links") {
        client.simpleEmbed({
            image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `<:helix_link:1093959383626551356> • Links`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\n> **See all the links from Bot Network!**`,
                fields: [
                    {
                        name: `▬▬│Servers│▬▬`,
                        value: `> **MindForge: https://discord.gg/MindForge**`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rewards") {
        client.embed({
            title: `<:custom_role:1099285156285661205>・Role Rewards`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `\n\n> **Do you want some extras in the server? Or do you want to stand out more in the server? Look below for the rewards**`,
            fields: [
                {
                    name: `<a:level_up:1099286047466213456>┆Levels`,
                    value: `> <:whitearrow:1099256019609211021> Level 5   | <@&833307296699908097>\n> <:whitearrow:1099256019609211021> Level 10  | <@&833307450437664838>\n> <:whitearrow:1099256019609211021> Level 15  | <@&833307452279226379>\n> <:whitearrow:1099256019609211021> Level 30 | <@&915290300757458964>\n> <:whitearrow:1099256019609211021> Level 40 | <@&915290324480430080>`,
                },
                {
                    name: `<:Reds_Special:1099286509015810118>┆Special`,
                    value: `> <:whitearrow:1099256019609211021> 1 server vote | <@&833959913742794772>\n> <:whitearrow:1099256019609211021> 1 boost | <@&744208324022501447>\n> <:whitearrow:1099256019609211021> 1 donate | <@&849554599371210793>`,
                },
                {
                    name: `<:money:1099020939007631470>┆Economy`,
                    value: `> <:whitearrow:1099256019609211021> $10.000 | <@&890720270086733854>\n> <:whitearrow:1099256019609211021> $15.000 | <@&833936202725720084>\n> <:whitearrow:1099256019609211021> $20.000 | <@&833936185167839232> \n> <:whitearrow:1099256019609211021> $25.000 | <@&928236333309255711> \n> <:whitearrow:1099256019609211021> $30.000 | <@&928235747100733450>`,
                }
            ]
        }, interaction.channel)
    }

    if (message == "ourbots") {
        client.simpleEmbed({
            image: `https://cdn.discordapp.com/attachments/843487478881976381/874742741224022016/Bot_banner_bot_info.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `<:bot:1099212006298501200> • Our bots`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\n> **Outside of a community we also maintain 2 public bots. These bots are all made to make your server better!**`,
                fields: [
                    {
                        name: `<:bots:1099286980224888852>┆What is Helix?`,
                        value: `> Helix is a bot with which you can run your entire server! With no less than 400+ commands, we have a large bot with many options to improve your server! You know what else is beautiful? All of this is **FREE** to use!`,
                    },
                    {
                        name: `<:bots:1099286980224888852>┆What is Helios?`,
                        value: `> Helios was created for additional music. This way you never get in each other's way when someone is already listening to music. Furthermore, this bot contains a soundboard and a radio system`,
                    },
                    {
                        name: `<:invite:1099209986497859634>┆How do I invite the bots?`,
                        value: `> You can invite the bots by doing \`/invite\` or by clicking on the links below \n\n> <:whitearrow:1099256019609211021> **Helix** - [Invite here](${client.config.discord.botInvite})`,
                    },
                    {
                        name: `<:bot_support_ticket:1099273924912631818>┆How do I get help when needed?`,
                        value: `> You can make a ticket in <#1092064964660969564> !! We are happy to help you with your questions here and offer support in your server!`,
                    }
                ]
            }, interaction.channel)
        })
    }
}

 