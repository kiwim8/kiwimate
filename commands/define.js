const urban = require("Urban");
exports.run = (client, message, args) => {
  var definitions = urban(args);
  definitions.first(function(data) {
    if (data == null) {
      message.reply("Could not find a definition!")
      return;
    }


    var definition = (data.definition)
    var example = (data.example)
    var author = (data.author)


    if (desc.length > 2048) {
      desc = ("**Message was shortened as it was too long :(** " + definition).substr(0, 1400);

    }


    message.channel.send("Definition: ```" + definition + "```\n Example: ```" + example + "```" + "\n Written by: ```" + author + "```");
  });

  };





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'define',
  description: 'replies with definition from urban dictionary',
  usage: 'define [word/phrase]'
};
