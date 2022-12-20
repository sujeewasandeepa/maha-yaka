const { Events, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  name: Events.GuildMemberAdd,
  once: false,
  execute(member) {
    console.log(member);
    console.log("A member joined!");

    const row = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('select')
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
            }
          ),
      );
    // work in progress
  }
}
