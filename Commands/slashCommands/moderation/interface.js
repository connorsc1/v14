const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'interface',
	description: "moderation interface",
	run: async (client, interaction) => {
    const msg = ('mod interface')
    await interaction.reply({ content: msg })
	}
};