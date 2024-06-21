const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.ml/img/cat`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `<a:oh_yeah:1100770916104933486>  •  Random Cat Image`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
}

 