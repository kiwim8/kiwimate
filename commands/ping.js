exports.run = (client, message) => {
  message.channel.send('Pinging')
    .then(msg => {
      let time = msg.createdTimestamp - message.createdTimestamp
      msg.edit("Pong! (took: " + time + "ms)");

      if (time > 1000) {
        msg.edit("Pong! (took: " + time + "ms - Rate limit detected)");
      }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Replies with pong',
  usage: 'ping'
};
