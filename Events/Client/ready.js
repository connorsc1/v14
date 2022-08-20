const { ActivityType } = require('discord.js');
const client = require('../..')
const chalk = require('chalk')
const mongoose = require('mongoose')

client.on("ready", () => {
  client.user.setPresence({
    status: "dnd",
  });

  const Database = process.env.MONGO_DB

	if(Database) {
          mongoose.connect(Database, {
               useNewUrlParser: true,
               useUnifiedTopology: true
          }).then(() => {
               console.log(chalk.cyan("Mongo Database • Connected"))
          }).catch((err) => {
               console.log(err)
          });
		}

	console.log(chalk.white('[Info]') + chalk.gray(' Logged in on') + chalk.white(` ${client.user.tag}`));
});
