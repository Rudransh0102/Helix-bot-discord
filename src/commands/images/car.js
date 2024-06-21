const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    const image = await pop.car();
    let attach = new Discord.AttachmentBuilder(image.image, { name: "car.png" });

    const embed = client.templateEmbed().setTitle(`<a:pepegaDriver:1100770330286510181>  •  Random Car Image `).setImage("attachment://car.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
};