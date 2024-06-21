const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    
    const voiceChannel = interaction.member.voice.channel;
    const userListeners = voiceChannel.members.filter(member => !member.user.bot).size;

    client.embed({
        title: `<:helix_radio:1101901495189909575>  •  Radio information`,
        desc: `**> All info about the radio in this guild**`,
        fields: [{
            name: `${client.emotes.normal.user}┆Channel Listeners`,
            value: `**> ${userListeners} listeners**`,
            inline: true
        },
        {
            name: `${client.emotes.normal.tv}┆Connected channel`,
            value: `**> ${interaction.member.voice.channel} (${interaction.member.voice.channel.name})**`,
            inline: true
        },
        {
            name: `<:radio_station:1101901519978250240>┆Radio Station`,
            value: `**> [Radio 538](https://www.538.nl/)**`,
            inline: true
        },
        ],
       type: 'editreply'
    }, interaction)
}

 