const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = async (client, interaction, args) => {
    const country = interaction.options.getString('location');

    weather.find({ search: country, degreeType: 'C' }, function (error, result) {
        if (result === undefined || result.length === 0) return client.errNormal({
            error: "Invalid location",
            type: 'editreply'
        }, interaction);

        var current = result[0].current;
        var location = result[0].location;

        let weatherEmoji = '☀️'; // Default weather emoji for clear weather

        client.embed({
            title: `${weatherEmoji}   •   Weather - ${current.skytext}`,
            desc: `**> Weather forecast for ${current.observationpoint}**`,
            thumbnail: current.imageUrl,
            fields: [
                {
                    name: "Timezone :",
                    value: `**> UTC  ${location.timezone}**`,
                    inline: true,
                },
                {
                    name: "Degree Type :",
                    value: `**> Celsius**`,
                    inline: true,
                },
                {
                    name: "Temperature :",
                    value: `**> ${current.temperature}°**`,
                    inline: true,
                },
                {
                    name: "Wind speed :",
                    value: `**> ${current.winddisplay}**`,
                    inline: true,
                },
                {
                    name: "Feels like :",
                    value: `**> ${current.feelslike}°**`,
                    inline: true,
                },
                {
                    name: "Humidity :",
                    value: `**> ${current.humidity}%**`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction)
    })
}

 