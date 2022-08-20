const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
		const msg = await message.reply(':ping_pong: Pong!')
        const newmsg = (`:ping_pong: Pong!\nPing: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms`)
        await msg.edit({ content: newmsg })
	}
};