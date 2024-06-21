const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {
    try {
        const profile = await Schema.deleteOne({ User: interaction.user.id, Guild: interaction.guild.id });
        if (profile) {
            client.succNormal({
                text: "Your profile was deleted!",
                type: 'editreply'
            }, interaction);
        } else {
            client.errNormal({
                error: 'No profile found!',
                type: 'editreply'
            }, interaction);
        }
    } catch (err) {
        console.error(err);
        client.errNormal({
            error: 'An error occurred while deleting the profile.',
            type: 'editreply'
        }, interaction);
    }
};
