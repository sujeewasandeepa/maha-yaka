// import dotenv from 'dotenv' 
const dotenv = require('dotenv')
dotenv.config()

const fs = require('node:fs')
const path = require('node:path')

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
})

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

client.login(process.env.DISCORD_TOKEN)

client.on("messageCreate", async (message) => {
    console.log(message.author.username + " -> " + message.content)
})

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
    // console.log(event)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}