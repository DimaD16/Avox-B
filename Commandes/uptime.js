const { MessageEmbed } = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
    var uptime = new MessageEmbed()
    .setTitle("Je suis en ligne depuis :")
    .setDescription(`${duration(bot.uptime)}`)
    .setThumbnail(`https://media.giphy.com/media/lq3puC8soFNZTUh2ka/giphy.gif`)



    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `** ${days.padStart(1, '0')} ** jour(s), ** ${hrs.padStart(2, '0')} ** heure(s), ** ${min.padStart(2, '0')} ** minute(s), ** ${sec.padStart(2, '0')} ** seconde(s).`
    }
    message.channel.send(uptime)
}
module.exports.help = {
    name: "uptime"
}