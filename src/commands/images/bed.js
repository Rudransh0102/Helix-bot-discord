const Discord = require('discord.js');
const Canvacord = require("canvacord");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const img = await Canvacord.Canvas.bed(interaction.user.avatarURL({ size: 1024, extension: 'png' }), userAvatar);

    let attach = new Discord.AttachmentBuilder(img, { name: "bed.png" });
    const embed = client.templateEmbed().setImage("attachment://bed.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
}

