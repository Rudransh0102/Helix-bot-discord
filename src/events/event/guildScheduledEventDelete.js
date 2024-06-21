const discord = require('discord.js');

module.exports = async (client, event) => {
    let types = {
        GUILD_ONLY: "Server only",
        PUBLIC: "Public",
    }

    let locations = {
        NONE: "None",
        STAGE_INSTANCE: "Stage Channel",
        VOICE: "Voice Channel",
        EXTERNAL: `External`
    }

    const logsChannel = await client.getLogs(event.guildId);
    if (!logsChannel) return;

    client.embed({
        title: `🎡・Event deleted`,
        desc: `**> An event has been deleted**`,
        fields: [
            {
                name: `> Name :`,
                value: `** <:whitearrow:1099256019609211021> ${event.name}**`
            },
            {
                name: `> Description :`,
                value: `** <:whitearrow:1099256019609211021> ${event.description || 'None'}**`
            },
            {
                name: `> Start :`,
                value: `** <:whitearrow:1099256019609211021> <t:${(event.scheduledStartTimestamp / 1000).toFixed(0)}>**`
            },
            {
                name: `> Privacy :`,
                value: `** <:whitearrow:1099256019609211021> ${types[event.privacyLevel]}**`
            },
            {
                name: `> Creator :`,
                value: `** <:whitearrow:1099256019609211021> <@!${event.creatorId}> (${event.creatorId})**`
            },
            {
                name: `> Location type :`,
                value: `** <:whitearrow:1099256019609211021> ${locations[event.entityType]}**`
            },
            {
                name: `> Timestamp :`,
                value: `** <:whitearrow:1099256019609211021>v <t:${Math.floor(Date.now() / 1000)}:R>**`
            }
        ]
    }, logsChannel).catch(() => { })
};