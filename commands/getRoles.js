const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('get-roles')
    .setDescription('Get roles to show your academic year and programme.'),

  async execute(interaction) {
    const rows = []
    const row1 = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('academic-year')
          .setPlaceholder('Select your academic year')
          .addOptions(
            {
              label: '1st year',
              description: 'You are in the first academic year.',
              value: '1st-year',
            },
            {
              label: '2nd year',
              description: "You are in the second academic year.",
              value: '2nd-year',
            },
            {
              label: '3rd year',
              description: "You are in the third academic year.",
              value: '3rd-year',
            },
            {
              label: '4th year',
              description: "You are in the fourth academic year.",
              value: '4th-year',
            },
          )
      );
    const row2 = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('degree-program')
          .setPlaceholder('Select your program')
          .setOptions(
            {
              label: 'BSE',
              description: "Bachelor's of Software Engineering",
              value: 'bse',
            },
            {
              label: 'CS',
              description: "Bachelor's of Science in Computer Science",
              value: 'cs',
            },
            {
              label: 'IT',
              description: "Bachelor's of Science in Information Technology",
              value: 'it',
            }
          )
      )
    await interaction.reply({ content: 'Please select your roles.', components: [row1, row2] })

  }
}
