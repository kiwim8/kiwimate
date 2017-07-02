exports.run = (client, message, args) => {
  let gennumber = Math.floor(Math.random() * 100) + 1
  let usernumber = args.slice(0).join(' ');
  let convert = parseInt(usernumber)
  if (convert < 0)  return message.reply("Number must be between 1 and 100");
  if (convert > 100) return message.reply("Greater than 100");
  if (convert === 0) return message.reply("You can't pick 0.");
  if (convert > gennumber) {
    message.reply("The dice rolled " + gennumber + "\n You win!");
  }
  else if (convert < gennumber) {
    message.reply("The dice rolled " + gennumber + "\n You lose!");
  }


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['num'],
  permLevel: 0
};

exports.help = {
  name: 'numberbet',
  description: 'Pick a number and if it\'s higher than the dice, you win..',
  usage: '!numberbet [number]'
};
