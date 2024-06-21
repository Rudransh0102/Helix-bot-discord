const Discord = require('discord.js');

const Schema = require("../../database/models/warnings");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction);

    if (perms == false) return;

    var member = interaction.options.getUser('user');

    Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
        if (data) {
            data.Warns += 1
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                User: member.id,
                Warns: 1
            }).save();
        }
    })

    client.embed({
        title: `<:ban_hammer:1099653130267922482>・Warn`,
        desc: `You've been warned in **${interaction.guild.name}**`,
        fields: [
            {
                name: `${client.emotes.normal.user}┆Moderator`,
                value: `**> ${interaction.user.tag}**`,
                inline: true
            },
        ]
    }, member).catch(() => {})

    client.emit('warnAdd', member, interaction.user)
    client.succNormal({
        text: `User has received a warning!`,
        fields: [
            {
                name: `${client.emotes.normal.user}┆User`,
                value: `**> ${member}**`,
                inline: true
            }
        ],
        type: 'editreply'
    }, interaction);
}

 