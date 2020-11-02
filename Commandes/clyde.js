const Discord= require("discord.js");
fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

    
    const text = args.join(" ");

    if(!text){
        message.channel.send("Tu n'a pas mis un text !")
    }
    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
    const json = await res.json();
    const attachment = new Discord.MessageAttachment(json.message, "clyde.png");

message.channel.send(attachment)


    const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `clyde`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` ${args.join(' ')}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
}

module.exports.help = {
    name: "clyde"
}