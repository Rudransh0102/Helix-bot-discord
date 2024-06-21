const Discord = require('discord.js');
const Canvacord = require("canvacord");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const amount = 60

    const image = await Canvacord.Canvas.darkness(userAvatar, amount);
    let attach = new Discord.AttachmentBuilder(image, { name: "darkness.gif" });

    const embed = client.templateEmbed().setTitle(`${client.emotes.normal.user}  •  Darken Image `).setImage("attachment://darkness.gif");
    interaction.editReply({ files: [attach], embeds: [embed] });    
}

