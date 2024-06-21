const Discord = require('discord.js');

const Schema = require("../../database/models/family");

module.exports = async (client, interaction, args) => {

    const target = interaction.options.getUser('user');
    const author = interaction.user;

    if (author.id == target.id) return client.errNormal({
        error: "You cannot adopt yourself",
        type: 'editreply'
    }, interaction);

    if (target.bot) return client.errNormal({
        error: "You cannot adopt a bot",
        type: 'editreply'
    }, interaction);

    const familyMember = await Schema.findOne({ Guild: interaction.guild.id, User: target.id, Parent: author.id });
    const familyMember2 = await Schema.findOne({ Guild: interaction.guild.id, User: author.id, Parent: target.id });
    const familyMember3 = await Schema.findOne({ Guild: interaction.guild.id, User: author.id, Partner: target.id });

    if (familyMember || familyMember2 || familyMember3) {
        return client.errNormal({
            error: `You cannot adopt a family member!`,
            type: 'editreply'
        }, interaction);
    }

    const checkAdopt = await Schema.findOne({ Guild: interaction.guild.id, Children: target.username });
    if (checkAdopt) {
        return client.errNormal({
            error: `This user has already been adopted`,
            type: 'editreply'
        }, interaction);
    }

    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setCustomId('adopt_yes')
                .setEmoji(client.emotes.normal.check)
                .setStyle(Discord.ButtonStyle.Secondary),

            new Discord.ButtonBuilder()
                .setCustomId('adopt_deny')
                .setEmoji(client.emotes.normal.error)
                .setStyle(Discord.ButtonStyle.Secondary),
        );

    client.embed({
        title: `<:helix_family:1099668877845213265> • Adoption`,
        desc: `****> ${author} has asked ${target} to adopt him! \n\n> ${target} click on one of the buttons****`,
        components: [row],
        content: `${target}`,
        type: 'editreply',
    }, interaction)

    const filter = i => i.user.id === target.id;

    interaction.channel.awaitMessageComponent({ filter, componentType: Discord.ComponentType.Button, time: 60000 }).then(async i => {
        if (i.customId == "adopt_yes") {

            Schema.findOne({ Guild: interaction.guild.id, User: author.id }, async (err, data) => {
                if (data) {
                    data.Children.push(target.username);
                    data.save();
                }
                else {
                    new Schema({
                        Guild: interaction.guild.id,
                        User: author.id,
                        Children: target.username
                    }).save();
                }
            })

            Schema.findOne({ Guild: interaction.guild.id, User: target.id }, async (err, data) => {
                if (data) {
                    data.Parent.push(author.username);
                    data.save();
                }
                else {
                    new Schema({
                        Guild: interaction.guild.id,
                        User: target.id,
                        Parent: author.username
                    }).save();
                }
            })

            client.embed({
                title: `<:helix_family:1099668877845213265> • Adoption - Approved`,
                desc: `${author} is now the proud parent of ${target}! 🎉`,
                components: [],
                type: 'editreply'
            }, interaction);
        }

        if (i.customId == "adopt_deny") {
            client.embed({
                title: `<:helix_family:1099668877845213265> • Adoption - Denied`,
                desc: `${target} don't want to be adopted by ${author}`,
                components: [],
                type: 'editreply'
            }, interaction);
        }
    }).catch(() => {
        client.embed({
            title: `<:helix_family:1099668877845213265> • Adoption - Denied`,
            desc: `${target} has not answered anything! The adoption is canceled`,
            components: [],
            type: 'editreply'
        }, interaction);
    });
}

 