const Discord = require('discord.js');

const Schema = require("../../database/models/verify");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const boolean = interaction.options.getBoolean('enable');
    const channel = interaction.options.getChannel('channel');
    const role = interaction.options.getRole('role');

    if (boolean == true) {
        const data = await Schema.findOne({ Guild: interaction.guild.id });
        if (data) {
            data.Channel = channel.id;
            data.Role = role.id
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Channel: channel.id,
                Role: role.id
            }).save();
        }

        client.succNormal({
            text: `Verify panel has been successfully created`,
            fields: [
                {
                    name: `${client.emotes.normal.channel}┆Channel`,
                    value: `> **${channel} (${channel.name})**`,
                    inline: true
                },
                {
                    name: `📛┆Role`,
                    value: `> **${role} (${role.name})**`,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);

        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('Bot_verify')
                    .setEmoji('<a:verified:1092156142186139698>')
                    .setStyle(Discord.ButtonStyle.Secondary),
            );

        client.embed({
            title: `> ${interaction.guild.name} Verification`,
            desc: `> **Welcome to our server! We want to make sure that everyone here is a real human being and not a bot. To get verified, simply click the button below. Once verified, you'll have access to all the cool features our server has to offer. Let's keep things secure and spam-free for everyone. Thanks for your cooperation!**`,
            components: [row],
            color: ("Green")
        }, channel)
    }
}

 