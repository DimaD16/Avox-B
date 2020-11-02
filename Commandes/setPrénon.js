const Discord = require('discord.js');
const fs = require("fs")


module.exports.run = async (client, message, args) => {

    const Prénom = JSON.parse(fs.readFileSync('Prénom.json'))

    
    Prénom[message.author.id] = {
        text: args.join(" ")
    }

    fs.writeFileSync('Prénom.json', JSON.stringify(Prénom))

    message.channel.send("Vous avez changez/ajouter votre Prénom")

}

module.exports.help = {
    name: "setPrenom"
}