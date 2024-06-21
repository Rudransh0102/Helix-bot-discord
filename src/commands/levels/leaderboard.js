const Discord = require('discord.js');

const Schema = require("../../database/models/levels");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ guildID: interaction.guild.id }).sort(([['xp', 'descending']])).exec();

    if (!rawLeaderboard) return client.errNormal({
        error: `No data found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**> ${rawLeaderboard.findIndex(i => i.guildID === interaction.guild.id && i.userID === e.userID) + 1} | <@!${e.userID}> <:whitearrow:1099256019609211021> Level: \`${e.level.toLocaleString()}\` _ _ (${e.xp.toLocaleString()} xp)\n**`);

    await client.createLeaderboard(`<a:level_up:1099286047466213456>・Levels - ${interaction.guild.name}`, lb, interaction);
}

 