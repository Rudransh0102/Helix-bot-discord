const Discord = require('discord.js');
const Canvacord = require("canvacord");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const image = await Canvacord.Canvas.colorfy(userAvatar, "#ff0000")
    let attach = new Discord.AttachmentBuilder(image, { name: "colorify.png" });

    const embed = client.templateEmbed().setTitle(`${client.emotes.normal.user}  •  Colorified Image `).setImage("attachment://colorify.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
}

