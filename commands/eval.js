exports.run = (client, message, args) => {
  const ownerid = "264481367545479180" /* remove this when trying to use, could call from settings.json*/
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if(message.author.id != ownerid) return console.log("[EVAL] " + message.author.username + " just tried to use eval."); /* if it isn't the owners id then return. do not let anyone use this*/


  try {
    const code = args.join("");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"x1"});

  } catch (error) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(error)}\n\`\`\``); /* credits to stackoverflow once again*/
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
  description: 'runs javascript',
  usage: 'eval [jaavscript]'
};
