const Discord = require('discord.js');
const Canvacord = require("canvacord");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const image = await Canvacord.Canvas.facepalm(userAvatar);
    let attach = new Discord.AttachmentBuilder(image, { name: "facepalm.png" });

    const embed = client.templateEmbed().setImage("attachment://facepalm.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
}

