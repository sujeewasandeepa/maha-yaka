const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  once: false,

  async execute(interaction) {
    if (!interaction.isStringSelectMenu()) return;
    if (interaction.customId === 'select') {
      await interaction.followUp({ content: 'Something was selected!', components: [] });
    }
  }
} 
