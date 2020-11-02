const Discord= require('discord.js');
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    const book = JSON.parse(fs.readFileSync('book.json'))
    const user = message.mentions.users.first()

    const embed = new Discord.MessageEmbed()
    .setTitle(`livre de  ${user ? user.username : message.author.username}`)
    .setDescription(book[user ? user.id : message.author.id].text)



    message.channel.send(embed)
}

module.exports.help = {
    name: "book"
}