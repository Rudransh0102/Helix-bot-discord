const Discord = require('discord.js');
const Schema = require("../../database/models/music");

module.exports = async (client, interaction, args) => {
    const webhookClientLogs = new Discord.WebhookClient({
        id: client.webhooks.voiceLogs.id,
        token: client.webhooks.voiceLogs.token,
    });

    let channel = interaction.member.voice ? interaction.member.voice.channel : null;
    if (!channel) return client.errNormal({ text: `The channel does not exist!`, type: 'editreply' }, interaction);

    client.radioStart(channel);

    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            data.Channel = channel.id;
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Channel: channel.id,
            }).save();
        }
    })

    client.embed({
        title: `<:helix_radio:1101901495189909575>  •  Started radio`,
        desc: `**> Radio has started successfully \n> To make the bot leave do: \`/radio stop\`**`,
        fields: [{
            name: `${client.emotes.normal.user}┆Started By`,
            value: `**> ${interaction.user} (${interaction.user.tag})**`,
            inline: true
        },
        {
            name: `${client.emotes.normal.tv}┆Channel`,
            value: `**> ${channel} (${channel.name})**`,
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

    let embed = new Discord.EmbedBuilder()
        .setTitle(`<:helix_radio:1101901495189909575>  •  Started radio`)
        .setDescription(`**> Radio has started successfully**`)
        .addFields(
            { name: `${client.emotes.normal.user}┆Started By`, value: `**> ${interaction.user} (${interaction.user.tag})**`, inline: true },
            { name: `${client.emotes.normal.tv}┆Channel`, value: `**> ${channel} (${channel.name})**`, inline: true },
            { name: `<:Server:1099343664024649870>┆Guild`, value: `**> ${interaction.guild.name} (${interaction.guild.id})**`, inline: true },
        )
        .setColor(client.config.colors.normal)
        .setTimestamp();
    webhookClientLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });
}

 