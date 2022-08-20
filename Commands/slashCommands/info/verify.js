const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
const { Captcha } = require("discord.js-captcha");

module.exports = {
	name: 'verify',
	description: "Allows users to verify their accounts to gain a role.",
	run: async (client, interaction, guild) => {

    const captcha = new Captcha(client, {
    roleID: "1010501304973529158",
    channelID: "994298028347375799",
    sendToTextChannel: true,
    addRoleOnSuccess: true,
    kickOnFailure: false,
    caseSensitive: false,
    attempts: 3,
    timeout: 30000,
    showAttemptCount: true,
    customPromptEmbed: new EmbedBuilder(),
    customSuccessEmbed: new EmbedBuilder(),
    customFailureEmbed: new EmbedBuilder(),
});

    
		const embed = new EmbedBuilder()
		.setTitle('Press the button to verify')
		.setColor('#2F3136')
    
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('button1')
					.setLabel('Verify')
					.setStyle(ButtonStyle.Success),
			);

    const embed2 = new EmbedBuilder()
		.setTitle('.')
		.setColor('#2F3136')
    
    client.on('interactionCreate', interaction => {
  	if (interaction.customId === 'button1') {
    const interactionUser = interaction.guild.members.fetch(interaction.user)
    captcha.present(interactionUser);
  	interaction.reply({ embeds: [embed2], components: [], ephemeral: true });
  	}
});
    await interaction.channel.send({ embeds: [embed], components: [row] });
	}
};