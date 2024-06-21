const { CommandInteraction, Client } = require("discord.js");
const { ContextMenuCommandBuilder } = require("discord.js");
const Discord = require("discord.js");
const axios = require("axios");

const model = require("../../database/models/badge");

module.exports = {
  data: new ContextMenuCommandBuilder().setName("Userinfo").setType(2),

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ ephemeral: false });
    const member = await interaction.guild.members.fetch(
      interaction.options.getUser("user").id
    );
    if (!member)
      return client.errNormal(
        {
          error: "This user is not in this guild!",
          type: "editreply",
        },
        interaction
      );
    const badgeFlags = {
      DEVELOPER: client.emotes.badges.developer,
      BUGS: client.emotes.badges.bug,
      MANAGEMENT: client.emotes.badges.management,
      PREMIUM: client.emotes.badges.premium,
      SUPPORTER: client.emotes.badges.supporter,
      TEAM: client.emotes.badges.team,
      BOOSTER: client.emotes.badges.booster,
      PARTNER: client.emotes.badges.partner,
      VOTER: client.emotes.badges.voter,
      SUPPORT: client.emotes.badges.support,
      MODERATOR: client.emotes.badges.moderator,
      DESIGNER: client.emotes.badges.designer,
      MARKETING: client.emotes.badges.marketing,
    };

    const flags = {
      ActiveDeveloper: "<:Activedev:1100391425130123334>",
      BugHunterLevel1: "<:bug_hunter1:1100396638385750066>",
      BugHunterLevel2: "<:bug_hunter2:1100396602948059277>",
      CertifiedModerator: "<:moderation:1093532946973085727>",
      HypeSquadOnlineHouse1: "<:badge_house_bravery:1100407997928329287>",
      HypeSquadOnlineHouse2: "<:House_Balance_Member:1100408032271278100>",
      HypeSquadOnlineHouse3: "<:house_brilliance:1100408106464333945>",
      HypeSquadEvents: "<:hypesquad_events:1100409666896416808>",
      PremiumEarlySupporter: "<:early_supporter:1100409986015838208>",
      Partner: "<:partnership_badge:1093533139827167242>",
      Quarantined: "🔒・Quarantined", // Not sure if this is still a thing
      Spammer: "🔒・Spammer", // Not sure if this one works
      Staff: "<:Moderator:1100410956057673779>",
      TeamPseudoUser: "<:Moderator:1100410956057673779>",
      VerifiedBot: "<:Verified_bot:1100411766711799808>",
      VerifiedDeveloper: "<a:a_developer:1093511861300899920>",
    };

    let Badges = await model.findOne({ User: member.user.id });
    if (!Badges) Badges = { User: member.user.id };
    const roles = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString())
      .slice(0, -1);
    const userFlags = member.user.flags ? member.user.flags.toArray() : [];

    return client.embed(
      {
        title: `${client.emotes.normal.user}・User information`,
        desc: `**> Information about : ${member.user.username}**`,
        thumbnail: member.user.displayAvatarURL({ dynamic: true, size: 1024 }),
        image: member.user.bannerURL({ dynamic: true, size: 1024 }),
        fields: [
          {
            name: "Username :",
            value: `**> ${member.user.username}**`,
            inline: true,
          },
          {
            name: "Discriminator :",
            value: `**> ${member.user.discriminator}**`,
            inline: true,
          },
          {
            name: "Nickname :",
            value: `**> ${member.nickname || "No nickname"}**`,
            inline: true,
          },
          {
            name: "Id :",
            value: `**> ${member.user.id}**`,
            inline: true,
          },
          {
            name: "Flags :",
            value: `**> ${
              userFlags.length
                ? userFlags.map((flag) => flags[flag]).join(" ")
                : "None"
            }**`,
            inline: true,
          },
          {
            name: "Badges :",
            value: `**> ${
              Badges.FLAGS
                ? Badges.FLAGS.map((flag) => badgeFlags[flag]).join(" ")
                : "None"
            }**`,
            inline: true,
          },
          {
            name: "Discord joined at :",
            value: `**> <t:${Math.round(
              member.user.createdTimestamp / 1000
            )}>**`,
            inline: true,
          },
          {
            name: "Server joined at :",
            value: `**> <t:${Math.round(member.joinedAt / 1000)}>**`,
            inline: true,
          },
          {
            name: `Roles [${roles.length}] :`,
            value: `**> ${roles.length ? roles.join(", ") : "None"}**`,
            inline: false,
          },
        ],
        type: "editreply",
      },
      interaction
    );
  },
};
