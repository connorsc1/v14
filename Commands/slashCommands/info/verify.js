const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle, InteractionType } = require('discord.js');
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
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    const modal = new Modal()
    	.setCustomId('verify')
    	.setTitle(`Verification Code = ${text}`)
    	.addComponents(
    		new TextInputComponent()
    			.setCustomId('verificationinput')
    			.setLabel('Verify')
    			.setStyle('SHORT')
    			.setPlaceholder(`Write ${text} here`)
    			.setRequired(true),
    	);
    
    client.on('interactionCreate', interaction => {
      if (interaction.customId === 'button1') {
        return interaction.showModal(modal, {
			    client: client,
			    interaction: interaction,
		    });
  	  }
    });

    client.on('interactionCreate', interaction => {
	    if (interaction.type !== InteractionType.ModalSubmit) return;
        const code = interaction.fields.getTextInputValue('verificationinput');
        if (code != text) {
          interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("#2F3136")
                .setDescription("Incorrect Code, please try again"),
            ],
            ephemeral: true,
            components: [row]
          });
        }
        
        if (code == text) {

          const role = interaction.guild.roles.cache.get("1010501304973529158");
          interaction.member.roles.add(role)
          interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("#2F3136")
                .setDescription("Verified"),
            ],
            ephemeral: true
          });
        }
      
    });
    
    await interaction.reply({ components: [row], ephemeral: true});
  }
};