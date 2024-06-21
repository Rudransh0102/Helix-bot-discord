const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");

module.exports = async (client, interaction, args) => {
    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, ticketData) => {
        if (ticketData) {
            const channel = interaction.guild.channels.cache.get(ticketData.Channel);
            const button = new Discord.ButtonBuilder()
                .setCustomId('Bot_openticket')
                .setLabel("Tickets")
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji('<:bot_support_ticket:1099273924912631818>')

            const row = new Discord.ActionRowBuilder()
                .addComponents(button)

            client.embed({
                title: "Tickets",
                desc: "Click on <:bot_support_ticket:1099273924912631818> to open a ticket to solve your queries and get staff's support",
                components: [row]
            }, channel)

            client.succNormal({
                text: `Ticket panel has been set up successfully!`,
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({
                error: `Run the ticket setup first!`,
                type: 'editreply'
            }, interaction);
        }
    })
}

 