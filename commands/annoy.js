const settings = require('../settings.json');

exports.run = (client, message, args) => {
  if (!message.author.id == settings.ownerid) {
    message.channel.send("This command can only be used by the guild owner.")
    console.log("[ANNOY] command failure.")
    return;
  }

  let user = message.mentions.users.first();
  let times = args.slice(1).join(' ');

  message.channel.send(times)
    .then(msg => {
  while (times > 0) {
    user.send("hi friend")
    times = times - 1
    msg.edit(times + " left to be sent.")
  }

  if (times == 0) {
    msg.edit("Finished annoying!")
    console.log("[ANNOY] Finished sending DMs")
  }
})

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 4
  };

exports.help = {
    name: 'annoy',
    description: 'sends lots of dms to a user.',
    usage: 'annoy [mention user] [times to send]'
  };
