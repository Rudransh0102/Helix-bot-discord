const Discord = require('discord.js');
const axios = require("axios");

const model = require('../../database/models/badge');

module.exports = async (client, interaction, args) => {
  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;

  function Emoji(id) {
    return client.emojis.cache.get(id).toString();
  }

  interaction.guild.emojis.cache.forEach((emoji) => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });

  client.embed({
    title: `<:pepeEvil:1099773277443985520>・Emoji's!`,
    desc: `${OverallEmojis} Emoji's - ${interaction.guild.name}`,
    fields: [
      {
        name: `Animated [${Animated}]`,
        value: `> ${EmojisAnimated.slice(0, 1015) + "..."}`,
        inline: false,
      },
      {
        name: `Standard [${EmojiCount}]`,
        value: `> ${Emojis.slice(0, 1015) + "..."}`,
        inline: false,
      }
    ],
  });

  client.embed({
    title: `<:emoji_459:1099288660106551436>・Emoji's Count!`,
    desc: `**> ${OverallEmojis} Emoji's \> ${interaction.guild.name}**`,
    fields,
    type: 'editreply'
  }, interaction)
}
