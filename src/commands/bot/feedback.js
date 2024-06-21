const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1092440621987397714",
    token: "lWvO9KeZPJI7Q7VI47roPsNJ7DTRlMdMkakiEcOO-ZODt4LkqbCeJduRkrsicNihnLSR",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`<:author:1099212610114695168>・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `<:check:1099309087675654235> Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 