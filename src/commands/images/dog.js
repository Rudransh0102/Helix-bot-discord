const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.ml/img/dog`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `<:dogeglasses:1100828303025246218>   •   Random Dog`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
}

 