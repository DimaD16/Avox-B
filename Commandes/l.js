

const Discord = require("discord.js");

fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
            
    if(!message.channel.nsfw) return message.channel.send("Ceci n'est pas un channel NSFW !")
    
            const res = await fetch(encodeURI(`https://nekobot.xyz/api/image?type=pgif`));
			const json = await res.json();
        
            let he = new Discord.MessageEmbed()
            .setAuthor(`Requéte de ${message.author.username}`)
            .setImage(json.message, "pgif.png")

     message.channel.send(he)

}

module.exports.help = {

    name: "pgif"
}

//https://nekobot.xyz/api/image?type=meow