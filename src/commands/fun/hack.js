const fetch = require("node-fetch");
const generator = require('generate-password');

module.exports = async (client, interaction, args) => {

    const password = generator.generate({
        length: 10,
        symbols: true,
        numbers: true
    });

    const user = interaction.options.getUser('user');

    if (!user) return client.errUsage({ usage: "hack [mention user]", type: 'editreply' }, interaction)

    function wait(ms) {
        let start = new Date().getTime();
        let end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }

    client.embed({
        title: `${client.emotes.badges.bug} • Hacking`,
        desc: `**> The hack on ${user} started...**`,
        type: 'editreply'
    }, interaction).then(msg => {

        wait(140);
        client.embed({
            title: `${client.emotes.badges.bug} • Hacking`,
            desc: `**> Searching for user information..**`,
            type: 'edit',
        }, msg).then(i => {

            wait(133);
            client.embed({
                title: `${client.emotes.badges.bug} • Hacking`,
                desc: `**> Searching for IP address...**`,
                type: 'edit',
            }, msg).then(i => {

                wait(140);
                client.embed({
                    title: `${client.emotes.badges.bug} • Hacking`,
                    desc: `**> The users ip address was found!**`,
                    fields: [
                        {
                            name: '<:helix_link:1093959383626551356> ┆****IP Address****',
                            value: `> \`\`\`127.0.0.1\`\`\` `,
                            inline: true,
                        }
                    ],
                    type: 'edit',
                }, msg).then(i => {

                    wait(60);
                    client.embed({
                        title: `${client.emotes.badges.bug} • Hacking`,
                        desc: `**> Searching for Discord login...**`,
                        type: 'edit',
                    }, msg).then(i => {

                        wait(230);
                        client.embed({
                            title: `${client.emotes.badges.bug} • Hacking`,
                            desc: `**> The users discord login was found!**`,
                            fields: [
                                {
                                    name: '<:Email:1099698429397049394> ┆**Email**',
                                    value: `\`\`\`${user.username}onDiscord@gmail.com\`\`\``
                                },
                                {
                                    name: '<a:Yellow_key:1099271261730918521> ┆**Password**',
                                    value: `\`\`\`${password}\`\`\``
                                }
                            ],
                            type: 'edit',
                        }, msg).then(i => {

                            wait(200);
                            client.embed({
                                title: `${client.emotes.badges.bug} • Hacking`,
                                desc: `**> Search for Discord token...**`,
                                type: 'edit'
                            }, msg).then(i => {

                                wait(200);
                                fetch(`https://some-random-api.ml/bottoken?${user.id}`).then((res) => res.json()).catch({}).then(async (json) => {
                                    client.embed({
                                        title: `${client.emotes.badges.bug} • Hacking`,
                                        desc: `**> The users discord account token was found!**`,
                                        fields: [
                                            {
                                                name: '🔧┆Token',
                                                value: `\`\`\`${json.token}\`\`\``,
                                                inline: true
                                            }
                                        ],
                                        type: 'edit',
                                    }, msg).then(i => {

                                        wait(140);
                                        client.embed({
                                            title: `${client.emotes.badges.bug} • Hacking`,
                                            desc: `**> Reporting account to Discord for breaking TOS...**`,
                                            type: 'edit',
                                        }, msg).then(i => {

                                            wait(180);
                                            client.succNormal({ text: `${user} is succesfully hacked. All the user's information was send to your dm`, type: 'edit' }, msg);
                                            client.embed({
                                                title: ' <:dank_laugh:1085839261422587904> • Pranked',
                                                image: "https://giphy.com/gifs/april-fools-3osxYyDIea4fgolhcY/fullscreen",
                                            }, interaction.user)
                                        })
                                    })
                                }).catch({})
                            })
                        })
                    })
                })
            })
        })
    })

}

 