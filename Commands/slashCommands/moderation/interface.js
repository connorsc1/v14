const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'interface',
	description: "moderation interface",
	run: async (client, interaction, guild) => {
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('Warn')
					.setLabel('Warn')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('Kick')
					.setLabel('Kick')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('Mute')
					.setLabel('Mute')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('Ban')
					.setLabel('Ban')
					.setStyle(ButtonStyle.Success),
			);
    const modalwarn = new Modal()
    	.setCustomId('Warn')
    	.setTitle('Warn')
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('warnmodal')
    			.setLabel('.')
    			.setStyle('SHORT')
    			.setPlaceholder('.')
    			.setRequired(true),
    	);
    const modalkick = new Modal()
    	.setCustomId('Kick')
    	.setTitle('Kick')
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('kickmodal')
    			.setLabel('.')
    			.setStyle('SHORT')
    			.setPlaceholder('.')
    			.setRequired(true),
    	);
    const modalmute = new Modal()
    	.setCustomId('Mute')
    	.setTitle('Mute')
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('mutemodal')
    			.setLabel('.')
    			.setStyle('SHORT')
    			.setPlaceholder('.')
    			.setRequired(true),
    	);
    const modalban = new Modal()
    	.setCustomId('Ban')
    	.setTitle('Ban')
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('banmodal')
    			.setLabel('.')
    			.setStyle('SHORT')
    			.setPlaceholder('.')
    			.setRequired(true),
    	);
    client.on('interactionCreate', interaction => {
    	if (interaction.customId === 'Warn') {
        interaction.showModal(modalwarn, {
  			  client: client,
  			  interaction: interaction,
  		  });
    	}
    	if (interaction.customId === 'Kick') {
        interaction.showModal(modalkick, {
  			  client: client,
  			  interaction: interaction,
  		  });
      }
    	if (interaction.customId === 'Mute') {
        interaction.showModal(modalmute, {
  			  client: client,
  			  interaction: interaction,
  		  });
      }
    	if (interaction.customId === 'Ban') {
        interaction.showModal(modalban, {
  			  client: client,
  			  interaction: interaction,
  		  });
      }
    });
    interaction.reply({ ephemeral: true, components: [row] });
  }
};