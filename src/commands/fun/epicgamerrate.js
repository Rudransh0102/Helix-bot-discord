
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `<:peepoStonedGamer:1099692978890608772> • Epic gamer rate`,
        desc: `**> You are ${result}% epic gamer!**`,
        type: 'editreply'
    }, interaction)
}

 