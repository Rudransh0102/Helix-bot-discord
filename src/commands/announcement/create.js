const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `<a:announce:1093958735367512135>・Announcement!`, 
        desc: message 
    }, channel);

    client.succNormal({
        text: `> **Announcement has been sent successfully!**`,
        fields: [
            {
                name: `${client.emotes.normal.channel}┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 