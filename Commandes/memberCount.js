const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        message.channel.send(`Il y a **__${message.guild.memberCount}__** membres sur le serveur 📡.`)
}
module.exports.help = {
    name: "memberCount"
}