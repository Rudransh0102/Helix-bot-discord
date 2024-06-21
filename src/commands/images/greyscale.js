const Discord = require('discord.js');
const Canvacord = require("canvacord");
module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const image = await Canvacord.Canvas.greyscale(userAvatar)
    let attach = new Discord.AttachmentBuilder(image, { name: "greyscale.png" });

    const embed = client.templateEmbed();
    embed.setTitle(`${client.emotes.normal.user}  •  Greyscale Image `).setImage("attachment://greyscale.png");
    interaction.editReply({ files: [attach], embeds: [embed] })
}

