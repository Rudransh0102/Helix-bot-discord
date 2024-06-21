const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const members = await interaction.guild.members.fetch()
  const getMember = members.filter(m => !m.user.bot)
    .sort((a, b) => b.user.createdAt - a.user.createdAt);

  const member = Array.from(getMember.values());

  client.embed({
    title: `<:pepe_kid:1100372442804924497>・Youngest member`,
    desc: `**> See who is the youngest member in ${interaction.guild.name}**`,
    fields: [
      {
        name: `${client.emotes.normal.user} ┆ User`,
        value: `**> ${member[0]} (${member[0].user.username}#${member[0].user.discriminator})**`,
        inline: true
      },
      {
        name: `${client.emotes.normal.clock} ┆ Account creation`,
        value: `**> <t:${Math.round(member[0].user.createdTimestamp / 1000)}>**`,
        inline: true
      },
    ],
    type: 'editreply'
  }, interaction)
}

   