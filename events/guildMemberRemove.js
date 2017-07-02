module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.send(`User ${member.user.username} left.`);
};
