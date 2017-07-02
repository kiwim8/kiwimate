exports.run = (client, message, args) => {

  let friendly = args.slice(1).join(' ');
  if (friendly.length < 1) return message.reply("You must add a message and ping a user!")
  let user = message.mentions.users.first();
  if (!message.mentions.users.first) return message.reply("You must ping a user!")
  message.channel.send(user + ", " + message.author + " wanted to say " + "'" + friendly + "'");

};


exports.conf = {
  enabled: false, /*disabled because it's useless*/
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hi',
  description: 'send a nice message',
  usage: 'hi [user] [message]'
};
