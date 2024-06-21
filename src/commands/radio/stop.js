const Discord = require('discord.js');
const Schema = require("../../database/models/music");

module.exports = async (client, interaction, args) => {
    const webhookClientLogs = new Discord.WebhookClient({
        id: client.webhooks.voiceLogs.id,
        token: client.webhooks.voiceLogs.token,
    });

    let channel = interaction.member.voice ? interaction.member.voice.channel : null;
    if (!channel) return client.errNormal({ error: `The channel does not exist!`, type: 'editreply' }, interaction);

    client.radioStop(channel);

    var remove = await Schema.deleteOne({ Guild: interaction.guild.id });

    client.embed({
        title: `<:helix_radio:1101901495189909575>  •  Radio stopped`,
        desc: `**> Radio has stopped successfully \n> To make the bot join do: \`/radio play\`**`,
        fields: [{
            name: `${client.emotes.normal.user}┆Stopped By`,
            value: `**> ${interaction.user} (${interaction.user.tag})**`,
            inline: true
        },
        {
            name: `${client.emotes.normal.tv}┆Channel`,
            value: `**> ${channel} (${channel.name})**`,
            inline: true
        }
        ],
        type: 'editreply'
    }, interaction)

    let embed = new Discord.EmbedBuilder()
        .setTitle(`<:helix_radio:1101901495189909575>  •  Radio stopped`)
        .setDescription(`**> Radio has stopped successfully**`)
        .addFields(
            { name: `${client.emotes.normal.user}┆Stopped By`, value: `**> ${interaction.user} (${interaction.user.tag})**`, inline: true },
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

 