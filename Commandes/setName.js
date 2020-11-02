const Discord = require('discord.js');
const fs = require("fs")


module.exports.run = async (client, message, args) => {

    const book = JSON.parse(fs.readFileSync('name.json'))

    
    book[message.author.id] = {
        text: args.join(" ")
    }

    fs.writeFileSync('name.json', JSON.stringify(book))

    message.channel.send("Vous avez changez/ajouter votre Nom")

}

module.exports.help = {
    name: "setName"
}