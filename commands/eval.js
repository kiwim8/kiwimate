exports.run = (client, message, args) => {
  const ownerid = "264481367545479180"
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if(message.author.id != ownerid) return;



  try {
    const code = args.join("");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"x1"});

  } catch (error) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(error)}\n\`\`\``);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'evals javascript',
  usage: '5 * 2'
};
