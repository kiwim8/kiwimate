const Discord = require('discord.js');

module.exports = (guild, user) => {

  guild.defaultChannel.send(`A user was just unbanned!`);

};
