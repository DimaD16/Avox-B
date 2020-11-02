const Discord = require('discord.js');

const oui = "722057347484090368"
const non = "722057503663194176"


module.exports.run = async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(args.slice(0).join(" "))
    .setDescription(`oui : <a:yes:722057347484090368> \nnon : <a:no:722057503663194176>`)

    if(!args.slice(0).join(" ")) return message.channel.send("Oups, tu n'a pas mis de text !")

    const msg = await message.channel.send(embed)

      msg.react(oui)
      msg.react(non)
      
  
}

module.exports.help = {
    name: "sondage"
}