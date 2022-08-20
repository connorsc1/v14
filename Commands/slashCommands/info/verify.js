const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
module.exports = {
	name: 'verify',
	description: "Allows users to verify their accounts to gain a role.",
	run: async (client, interaction, guild) => {
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('button1')
					.setLabel('Verify')
					.setStyle(ButtonStyle.Success),
			);

    const embed = new EmbedBuilder()
		.setTitle(`.`)
		.setColor('#2F3136')
    
    const modal = new Modal()
    	.setCustomId('verify')
    	.setTitle('Verification')
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('verificationinput')
    			.setLabel('Verify')
    			.setStyle('SHORT')
    			.setPlaceholder('Write "Verify" here')
    			.setRequired(true),
    	);
    client.on('interactionCreate', interaction => {
      if (interaction.customId === 'button1') {
        interaction.showModal(modal, {
			    client: client,
			    interaction: interaction,
		    });
  	  }
    });
    interaction.reply({ components: [row], ephemeral: true});
  }
};