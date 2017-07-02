exports.run = (client, message) => {
  message.channel.send('Calculating response time!')
    .then(msg => {
      msg.edit(`Calculated response time! (It took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'Calculates time server takes to respond.',
  usage: 'test'
};
