exports.run = (client, message, args) => {
    var arrayshit = [];
    let friendly = args.slice(0).join(' ')
    let unfriendly = args.slice(1).join(' ')
    let times = args.slice(2).join(' ')
    let convert = parseInt(friendly)
    let convert2 = parseInt(unfriendly)
    let gennumber = Math.floor(Math.random() * convert2) + convert
    if (times == "") {
      message.channel.send(gennumber + " - To select times to edit message, add a number after the min number.")
      return
    }
    if (convert < 0) return message.channel.send("must pick a number")
    let kek = parseInt(times)
    message.channel.send(gennumber)
      .then(msg => {
        let time = msg.createdTimestamp - message.createdTimestamp
        while (kek > 0) {
        gennumber = Math.floor(Math.random() * convert2) + convert
        kek = kek - 1
        msg.edit(gennumber + "\n" + time + "ms to gen. " + kek + " edits left.")
        arrayshit.push(gennumber)
        if (kek == 0) {
          msg.edit(arrayshit + " are your numbers.")
        }
        }
      });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ran'],
  permLevel: 0
};

exports.help = {
  name: 'randomnumber',
  description: 'spam edits random number in certain range',
  usage: 'randomnumber [min num] [max num] [times]'
};
