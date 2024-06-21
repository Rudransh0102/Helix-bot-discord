/*module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser('user') || interaction.user;

  client.embed({
    title: `${client.emotes.normal.user}・User avatar`,
    image: user.displayAvatarURL({ dynamic: false, size: 1024 }),
    type: 'editreply'
  }, interaction)
}*/
/**
 * @param {import('discord.js').User} user
 */
module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser('user') || interaction.user;

  const x64 = user.displayAvatarURL({ extension: "png", size: 64 });
  const x128 = user.displayAvatarURL({ extension: "png", size: 128 });
  const x256 = user.displayAvatarURL({ extension: "png", size: 256 });
  const x512 = user.displayAvatarURL({ extension: "png", size: 512 });
  const x1024 = user.displayAvatarURL({ extension: "png", size: 1024 });
  const x2048 = user.displayAvatarURL({ extension: "png", size: 2048 });
  
  client.embed({
    title: `${client.emotes.normal.user} •  Avatar of ${user.username}`,
    image: user.displayAvatarURL({ dynamic: false, size: 1024 }),
    desc:`**> Links:   [x64](${x64})` + `  •  [x128](${x128})` + `  •  [x256](${x256})` + `  •  [x512](${x512})` + `  •  [x1024](${x1024})` + `  •  [x2048](${x2048}) **`,
        type : 'editreply'
  }, interaction)
};


 