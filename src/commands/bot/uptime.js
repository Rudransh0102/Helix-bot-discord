const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");
    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    client.embed({
        title: `${client.emotes.normal.arrowUp} • ****Uptime****`,
        desc: `> **Displays how long the bot has been online since it was last started or restarted.**`,
        fields: [
            {
                name: `${client.emotes.normal.uptime} • ┇****Uptime****`,
                value: `> **${duration}**`,
                inline: true
            },
            {
                name: `${client.emotes.normal.clock} • ┇****Up Since****`,
                value: `> **<t:${upvalue}>**`,
                inline: true
            }
        ],
        type: 'editreply'
    }, interaction)
}

 