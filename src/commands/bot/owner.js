const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `<:information1:1098972252462141530> • ****Owner information****`,
        desc: `> **Get to know the mastermind behind this amazing bot!** `,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "<a:crown_uo:1093521837553614999>┆****Owner name****",
            value: `> **<@!769467035419279391>**`,
            inline: true,
        },
        {
            name: "🏷┆****Discord tag****",
            value: `> **Insane™#0843**`,
            inline: true,
        },
        {
            name: "<:group:1099043617991041055>┆****Organization****",
            value: `> **MindForge™**`,
            inline: true,
        },
       /* {
            name: "🌐┆Website",
            value: `[https://corwindev.nl](https://corwindev.nl)`,
            inline: true,
        }*/],
        type: 'editreply'
    }, interaction)
}

 