const Discord = require('discord.js');
const fs = require("fs")


module.exports.run = async (client, message, args) => {

    const couleur = JSON.parse(fs.readFileSync('couleur.json'))

    
    couleur[message.author.id] = {
        text: args.join(" ")
    }

    fs.writeFileSync('couleur.json', JSON.stringify(couleur))

    message.channel.send("Vous avez changez/ajouter votre Couleur preférez.")

}

module.exports.help = {
    name: "setColor"
}