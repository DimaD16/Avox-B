const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var d = new Date()
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    message.channel.send(`${hours}`)
}

module.exports.help = {
    name: "heure"
}