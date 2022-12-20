const dotenv = require('dotenv')
dotenv.config()

const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

const commands = [];
// get all the command files from the commands directory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// get each command's data for deployment as JSON
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// construct and prepare the instance of REST module
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// deploy the commands
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // put method is used to refresh all the commands in the guild with the current
        // set
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
            {body: commands },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);

    } catch(error) {
        console.error(error);
    }
})();