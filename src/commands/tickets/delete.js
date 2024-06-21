const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");
const { clearInterval } = require('timers');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    let type = 'reply';
    if (interaction.isCommand()) type = 'editreply';

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            const ticketCategory = interaction.guild.channels.cache.get(data.Category);

            if (ticketCategory == undefined) {
                return client.errNormal({
                    error: "Do the ticket setup!",
                    type: type
                }, interaction)
            }

            if (interaction.channel.parentId == ticketCategory.id) {
                client.simpleEmbed({
                    desc: `Delete this ticket in **10s**`,
                    type: type
                }, interaction).then(msg => {
                    let countdown = 10;
                    const interval = setInterval(() => {
                        countdown--;
                        if (countdown <= 0) {
                            clearInterval(interval);
                            interaction.channel.delete();
                            ticketChannels.findOne({ Guild: interaction.guild.id, channelID: interaction.channel.id }, async (err, data) => {
                                if (data) {
                                    var remove = await ticketChannels.deleteOne({ Guild: interaction.guild.id, channelID: interaction.channel.id });
                                }
                            })
                        } else {
                            msg.edit({
                                embeds: [{ description: `Deleting this ticket in **${countdown}s**`}]
                            });
                        }
                    }, 1000);
                });
            }
            else {
                client.errNormal({
                    error: "This is not a ticket!",
                    type: type
                }, interaction);
            }
        }
        else {
            return client.errNormal({
                error: "Do the ticket setup!",
                type: type
            }, interaction)
        }
    })
}

 