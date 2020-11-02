const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
var embed = new MessageEmbed()
.setTitle("Voici le lien pour inviter le bot :")
.setDescription("\n \n [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=714452126574706720&scope=bot&permissions=8&response_type=code)")
.setTimestamp()

message.channel.send(embed)
}

module.exports.help = {
    name: "invite"
}