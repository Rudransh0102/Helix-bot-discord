const Discord = require('discord.js');
const Canvacord = require("canvacord");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const lvl = 4

    const img = await Canvacord.Canvas.blur(userAvatar, lvl)

    let attach = new Discord.AttachmentBuilder(img, { name: "blurred.png" });
    const embed = client.templateEmbed().setTitle(`${client.emotes.normal.user}  •  Blurred Image `).setImage("attachment://blurred.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
}

