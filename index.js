const { Client, GatewayIntentBits, IntentsBitField, Partials, Collection } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent, //IMPORTANT: make sure you enable "Message Content Intent" in the dev portal!
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.DirectMessages,
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const config = require('./config.json');
require('dotenv').config() // remove this line if you are using replit

const Discord = require('discord.js');
client.commands = new Collection()
client.aliases = new Collection()
client.events = new Collection();
client.slashCommands = new Collection();
client.prefix = config.prefix

module.exports = client;


['events', 'prefixCommands', 'slashCommand'].forEach((handler) => {
  require(`./Handlers/${handler}`)(client)
});

client.login(process.env.TOKEN)