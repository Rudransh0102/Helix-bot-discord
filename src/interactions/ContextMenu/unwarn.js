const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/warnings");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Unwarn')
        .setType(2),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        const member = interaction.guild.members.cache.get(interaction.targetId);

        Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
            if (data) {
                data.Warns -= 1;
                data.save();
            }
            else {
                client.errNormal({
                    error: "User has no warnings!",
                    type: 'editreply'
                }, interaction);
            }
        })

        client.embed({
            title: `<:ban_hammer:1099653130267922482>・Unwarn`,
            desc: `You've been unwarned in **${interaction.guild.name}**`,
            fields: [
                {
                    name: `${client.emotes.normal.user}┆Moderator`,
                    value: `**> ${interaction.user.tag}**`,
                    inline: true
                },
            ]
        }, member).catch(() => {})

        client.emit('warnRemove', member, interaction.user)
        client.succNormal({
            text: `The user's warning has been successfully removed`,
            fields: [
                {
                    name: `${client.emotes.normal.user}┆User`,
                    value: `**> ${member}**`,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);
    },
};

 