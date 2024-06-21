const Discord = require('discord.js');
const { RankCard } = require('discord-arts');
const Functions = require('../../database/models/functions');
const Schema = require('../../database/models/levels');

module.exports = async (client, interaction, args) => {
  const data = await Functions.findOne({ Guild: interaction.guild.id });

  if (data && data.Levels == true) {
    const target = interaction.options.getUser('user') || interaction.user;
    const user = await client.fetchLevels(target.id, interaction.guild.id);
    if (!user || !user.xp)
      return client.errNormal(
        {
          error: 'This user has no levels!',
          type: 'editreply',
        },
        interaction
      );
    let xpRequired = client.xpFor(user.level + 1);

    const rankCard = new RankCard()
      .setUsername(target.username)
      .setDiscriminator(target.discriminator)
      .setLevel(user.level)
      .setRank(user.position)
      .setProgressBar(user.xp, xpRequired)
      .setAvatar(target.displayAvatarURL({ format: 'png', size: 128 }));

    rankCard.build().then((buffer) => {
      const attachment = new Discord.MessageAttachment(buffer, 'RankCard.png');
      interaction.editReply({ files: [attachment] });
    });
  } else {
    client.errNormal(
      {
        error: 'Levels are disabled in this guild!',
        type: 'editreply',
      },
      interaction
    );
  }
};
