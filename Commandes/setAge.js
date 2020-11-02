const Discord = require('discord.js');
const fs = require("fs")


module.exports.run = async (client, message, args) => {

    const age = JSON.parse(fs.readFileSync('age.json'))

    
    age[message.author.id] = {
        text: args.join(" ")
    }

    fs.writeFileSync('age.json', JSON.stringify(age))

    message.channel.send("Vous avez changez/ajouter votre Age")

}

module.exports.help = {
    name: "setAge"
}