const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const member = message.mentions.users.first()
    const avatarURL = member ? member.avatarURL({ size: 512, dynamic: true }) : message.author.avatarURL({ size: 512, dynamic: true })
    const attachment = new Discord.MessageAttachment(avatarURL)
    message.channel.send(attachment);

}

module.exports.help = {
    name: "pp"
}