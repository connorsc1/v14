const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		await interaction.reply(':ping_pong: Pong!')
        const msg = await interaction.fetchReply()
        const newmsg = (`:ping_pong: Pong!\nPing: ${Math.floor(msg.createdTimestamp - interaction.createdTimestamp)} ms`)
        interaction.editReply({ content: newmsg })
	}
};