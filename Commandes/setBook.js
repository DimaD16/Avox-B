const Discord = require('discord.js');
const fs = require("fs")
const book = JSON.parse(fs.readFileSync('book.json'))


module.exports.run = async (client, message, args) => {

    
    book[message.author.id] = {
        text: args.join(" ")
    }

    fs.writeFileSync('book.json', JSON.stringify(book))

    message.channel.send("Le livre à été crée !")

}

module.exports.help = {
    name: "setBook"
}