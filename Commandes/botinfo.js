const Discord = require("discord.js");

 
module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.MessageEmbed()
    .setTitle("Infos du bot")
    .setThumbnail(bot.user.avatarURL)
    .addField("Nom :", `Avox`, true)
    .addField(`Discriminant`, "#3404", true)
    .addField(`Devellopeur :`, `Dima`, true)
    .addField(`Bot créé le :`, `01/06/2020`, true)
    .addField(`Bot hébergé le :`, `15/06/2020`, true)
    .addField(`Language du bot :`, `<:js:721709899280678952> | JavaScript`, true)
    .addField("Systeme d'exploitation :", "Linux", true)
    .addField(`Architecture :`, `x86_64`, true)
    .addField(`Ressources utilisées :`, `204.9 MB`, true)
    .addField(`Version Discord.js :`, `v${Discord.version}`, true)
    .addField(`Version Node :`,`v14.10.0`, true)


    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo"
}

