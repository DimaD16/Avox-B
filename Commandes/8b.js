const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!args[1]) return message.channel.send("<:battention:756807255801856000> Entrez une question de plus de 1 mots ! <:battention:756807255801856000> ");

  let replies = ["C'est sur.", "Non","oui !","oui, j'en suis certain !", "Peut-être", "Mieux vaut ne pas te le dire maintenant...", "mais ct sur enft !!!!!", "je veut pas te decévoir. :confused:", "comment ça ??"];
  let res = Math.floor((Math.random() * replies.length));

  message.channel.send(`<:8Ball_Pool:720950435858350103> **${message.author}**, ${replies[res]}`);

  const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `8ball`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` ${args.join(' ')}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
};



module.exports.help = {
    name: "8ball"
};