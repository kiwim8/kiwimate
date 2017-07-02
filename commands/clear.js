exports.run = function(client, message, args) {
  const messagecount = parseInt(args.join(' '));
  if (messagecount > 100) {
    message.channel.send("You can only delete 100 messages at a time.")
    return
  };
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Deletes x amount of messages (100 is the limit)',
  usage: 'clear <number>'
};
