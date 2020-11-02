const Discord = require("discord.js");
fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
            
            const user = args[0];
            const text = args.slice(1).join(" ");

            if(!user) return message.channel.send("Tu n'a pas mis de pseudo !")
            if(!text) return message.channel.send("Tu n'a pas mis de texte !")
            const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "tweet.png");
    message.channel.send(attachment);
    
    const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `clyde`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` Pseudo : ${user}, text : ${text}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
}

module.exports.help = {
    name: "tweet"
}