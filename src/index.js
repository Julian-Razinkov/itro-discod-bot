const Discord = require('discord.js');
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const commandHandler = require('./commands/comandhandler');
const {token} = require("../config.json");

client.once('ready', () => {
    console.log("Beep Boop!")
});

client.on('messageCreate', commandHandler);

client.login(token)