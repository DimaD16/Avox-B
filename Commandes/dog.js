const Discord = require("discord.js");

fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

            const res = await fetch(encodeURI(`https://dog.ceo/api/breeds/image/random`));
			const json = await res.json();
        
            const he = new Discord.MessageEmbed()
            .setTitle("Chien random")
            .setImage(json.message, "dog.png")
            .setFooter("Image provenant de : https://dog.ceo/dog-api/")

            console.log(res)

     message.channel.send(he)

     const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `Dog`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
}

module.exports.help = {
    name: "dog"
}