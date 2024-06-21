const Discord = require('discord.js');
const generator = require('generate-password');

const Schema = require("../../database/models/notes");

module.exports = async (client, interaction, args) => {
    const rawboard = await Schema.find({ Guild: interaction.guild.id, User: interaction.user.id })

    if (rawboard.length < 1) return client.errNormal({ error: "No notes found!", type: 'editreply' }, interaction);

    const lb = rawboard.map(e => `** _ _<:whitearrow:1099256019609211021> Note ID: ${e.Code}** \n** _ _<:whitearrow:1099256019609211021> Note: ${e.Note} \n**`);

    await client.createLeaderboard(`<:noted:1101786360861425714> ・ Notes <:ArrowForward:1099642138817462293> ${interaction.user.username}`, lb, interaction);
}

 