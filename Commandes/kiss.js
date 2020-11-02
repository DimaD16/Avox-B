//lesbian

const Discord = require("discord.js");

fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

    const user = message.mentions.users.first()

            const res = await fetch(encodeURI(`https://nekos.life/api/v2/img/kiss`));
			const json = await res.json();
        
            const he = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} fait un kiss à ${user ? user.username : "Avox"}`)
            .setImage(json.url, "kiss.png")

     message.channel.send(he)

     const log = new Discord.MessageEmbed()
     .addField(`Serveur :`, message.guild.name, true)
     .addField(`ID Serveur :`, message.guild.id, true)
     .addField(`Commande :`, `kiss`, true)
     .addField(`Salon : `, message.channel.name, true)
     .addField(`Salon id : `, message.channel.id, true)
     .addField(`Auteur :`, message.author.username, true)
     .addField(`Kiss a qui ? `, `${user ? user.username : "Avox"}`)
     .addField(`Image`, json.url, true)
   
     client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)

}

module.exports.help = {

    name: "kiss"
}