const { Client, GatewayIntentBits, IntentsBitField, Partials, Collection } = require('discord.js');
const Jsoning = require("jsoning");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});
const discordModals = require("discord-modals");
discordModals(client);
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

this.database = {
  guild: new Jsoning("guild.json"),
};

client.login(process.env.TOKEN)
