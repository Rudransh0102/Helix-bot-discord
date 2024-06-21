const model = require('../../database/models/badge');
const Schema = require('../../database/models/profile');
const CreditsSchema = require("../../database/models/votecredits");

module.exports = async (client, interaction, args) => {

    const badgeFlags = {
        DEVELOPER: client.emotes.badges.developer,
        EVENT: client.emotes.badges.event,
        BOOSTER: client.emotes.badges.booster,
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
        ACTIVE: client.emotes.badges.active,
        VIP: client.emotes.badges.vip
    }

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
  }

    const user = interaction.options.getUser('user') || interaction.user;

    Schema.findOne({ User: user.id }, async (err, data) => {
        if (data) {
            let Badges = await model.findOne({ User: user.id });

            let credits = 0;
            const creditData = await CreditsSchema.findOne({ User: user.id });

            if (Badges && Badges.FLAGS.includes("DEVELOPER")) {
                credits = "∞";
            }
            else if (creditData) {
                credits = creditData.Credits;
            }

            if (!Badges) Badges = { User: user.id };

            const userFlags = user.flags ? user.flags.toArray() : [];

            client.embed({
                title: `${client.user.username}・Profile`,
                desc: '**> Unlock the power of knowledge and impress your Discord community with the profile section, revealing user greatness at a glance.**',
                thumbnail: user.avatarURL({ dynamic: true }),
                fields: [{
                    name: `${client.emotes.normal.user}┆User`,
                    value: `**> ${user.username}**`,
                    inline: true
                },
                {
                    name: "<:hashtag:1101886038823161979>┆Discriminator",
                    value: `**> #${user.discriminator}**`,
                    inline: true
                },
                {
                    name: "<:PP_ID:1099339521050550384>┆ID",
                    value: `**> ${user.id}**`,
                    inline: true
                },
                {
                    name: "<:Gender:1101886060939710614>┆Gender",
                    value: `**> ${data.Gender || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:BIOHackingVillage:1101887581156802571>┆Age",
                    value: `**> ${data.Age || 'Not set'}**`,
                    inline: true
                },
                {
                    name: `${client.emotes.normal.birthday}┆Birthday`,
                    value: `**> ${data.Birthday || 'Not set'}**`,
                    inline: true
                },
                {
                    name: `${client.emotes.badges.designer}┆Favorite color`,
                    value: `**> ${data.Color || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:BlushCat:1101886761036161097>┆Favorite pets",
                    value: `**> ${data.Pets.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "🍕┆Favorite food",
                    value: `**> ${data.Food.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: `${client.emotes.normal.music}┆Favorite songs`,
                    value: `**> ${data.Songs.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<a:peepoSing:1101888996226904134>┆Favorite artists",
                    value: `**> ${data.Artists.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:movies:1101889829903548598>┆Favorite movies",
                    value: `**> ${data.Movies.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:pepe_cool:1101869699190501497>┆Favorite actors",
                    value: `**> ${data.Actors.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:Home:1101890435112247336>┆Origin",
                    value: `**> ${data.Orgin || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:peepoStonedGamer:1099692978890608772>┆Hobby's",
                    value: `**> ${data.Hobbys.join(', ') || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "<:online:1101891549824028808>┆Status",
                    value: `**> ${data.Status || 'Not set'}**`,
                    inline: true
                },
                {
                    name: "📛┆Bot Badges",
                    value: `**> ${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join(' ') : 'None'}**`,
                    inline: true
                },
                {
                    name: "🏷️┆Discord Badges",
                    value: `**> ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' ') : 'None' || 'None'}**`,
                    inline: true
                },
                {
                    name: "<a:Pepe_credit_card:1098974556397502555>┆Dcredits",
                    value: `**> ${credits || 'None'}**`,
                    inline: true
                },
                {
                    name: `${client.emotes.normal.info}┆About me`,
                    value: `**> ${data.Aboutme || 'Not set'}**`,
                    inline: false
                },], type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "No profile found! Open a profile with /profile create", type:'editreply' }, interaction);
        }
    })
}

 