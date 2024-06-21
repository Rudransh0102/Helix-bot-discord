const Discord = require('discord.js');

const Schema = require('../../database/models/userBans');

const webhookClientLogs = new Discord.WebhookClient({
    id: "1099655195413200946",
    token: "n3DKS35ZU4F_0AMW9Fyy79prn0cbuDo5sT3uGJI-gge0PdOWj4Eytm-8bdXFDHWdspH4",
});

module.exports = async (client, interaction, args) => {
    const boolean = interaction.options.getBoolean('new');
    const member = interaction.options.getUser('user');

    if (boolean == true) {
        Schema.findOne({ User: member.id }, async (err, data) => {
            if (data) {
                return client.errNormal({
                    error: /*<@${member.id}>*/ `****(${member.id}) has already been banned from the bot****`,
                    type: `editreply`
                }, interaction);
            }
            else {
                new Schema({
                    User: member.id
                }).save();

                client.succNormal({
                    text: `<@!${member.id}> (${member.id}) banned from the bot`,
                    type: 'editreply'
                }, interaction)

                let embedLogs = new Discord.EmbedBuilder()
                    .setTitle(`<:ban_hammer:1099653130267922482>・Ban added`)
                    .setDescription(/*<@!${member.id}>*/ `> ****(${member.id}) banned from the bot****`)
                    .addFields(
                        { name: "> <:user:1099054255656148993> ┆****Banned By:****", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                    )
                    .setColor(client.config.colors.normal)
                    .setFooter({ text: client.config.discord.footer })
                    .setTimestamp();
                webhookClientLogs.send({
                    username: 'Bot Bans',
                    embeds: [embedLogs],
                });
            }
        })
    }
    else if (boolean == false) {
        Schema.findOne({ User: member.id }, async (err, data) => {
            if (data) {
                Schema.findOneAndDelete({ User: member.id }).then(() => {
                    client.succNormal({
                        text: `<@!${member.id}> (${member.id}) unbanned from the bot`,
                        type: 'editreply'
                    }, interaction)

                    let embedLogs = new Discord.EmbedBuilder()
                        .setTitle(`<:ban_hammer:1099653130267922482>・Ban removed`)
                        .setDescription(/*<@!${member.id}>*/ `> ****(${member.id}) unbanned from the bot****`)
                        .addFields(
                            { name: "> <:user:1099054255656148993> ┆****Unbanned By:****", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                        )
                        .setColor(client.config.colors.normal)
                        .setFooter({ text: client.config.discord.footer })
                        .setTimestamp();
                    webhookClientLogs.send({
                        username: 'Bot Bans',
                        embeds: [embedLogs],
                    });
                })
            }
            else {
                return client.errNormal({
                    error: `<@!${member.id}> (${member.id}) has not been banned from the bot`,
                    type: `editreply`
                }, interaction);
            }
        })
    }
}

 