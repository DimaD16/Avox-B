const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {


    const string = args.join(' ')

const reverse = string.split("").reverse().join("")

message.channel.send(reverse)

}

module.exports.help = {
    name: "reverse"
}