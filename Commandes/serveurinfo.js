const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    const verlvl = {
        0: "Aucun",
        1: "Bas",
        2: "Moyen",
        3: "(╯°□°）╯︵ ┻━┻",
        4: "(ノಠ益ಠ)ノ彡┻━┻"  
    }
 
    let servericon = message.guild.iconURL({dynamic: true})
    let serverembed = new Discord.MessageEmbed()
        .setThumbnail(servericon)
        .setAuthor(message.guild.name)
        .addField("Nom", message.guild.name)
        .addField("ID :id:", message.guild.id)
        .addField("Owner :crown:", message.guild.owner)
        .addField("Région", message.guild.region)
        .addField("Nombre de membres",  `${message.guild.memberCount}`)
        .addField("Rôles", message.guild.roles.cache.size)
        .addField("Salons", message.guild.channels.cache.size)
        .addField("Serveur crée le :", message.guild.createdAt)
 
    message.channel.send(serverembed);
 
 
}
 
module.exports.help = {
    name: "serveurinfo"
}