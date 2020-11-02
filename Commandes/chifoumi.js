const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Tu n'a pas choisi d'objet !");

  let replies = ["pierre", "feuilles", "sciseaux"];
  let res = Math.floor((Math.random() * replies.length));


  message.channel.send("Pierre").then(m => m.edit()).then(m => m.edit("Feuille")).then(m => m.edit()).then(m => m.edit("Sciseaux")).then(m => m.edit(`${message.author}, tu a choisi **${args}**, Le bot a choisi ${replies[res]} !`))

  

  const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `chifoumi`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` ${args.join(' ')}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
};



module.exports.help = {
    name: "chifoumi"
};