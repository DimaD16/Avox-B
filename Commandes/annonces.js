const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Nouvelles commandes :")
.setDescription(args.join(" "))
message.channel.send(embed)

}

module.exports.help = {
    name: "annonce"
}
