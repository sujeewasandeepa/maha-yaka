const { SlashCommandBuilder } = require('discord.js')
const { execute } = require('./ping')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option => 
        option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true))
    .addChannelOption(option => 
        option.setName('channel')
        .setDescription('The channel to echo into')),
    async execute(interaction) {
        await interaction.reply('hello!');
    },
};