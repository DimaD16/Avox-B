const Discord = require("discord.js");
const figlet = require('figlet');
exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    if (!arg.join(' ')) return message.channel.send("<:battention:756807255801856000> Veuillez spécifier un texte. <:battention:756807255801856000> ");
    figlet(arg.join(' '), (err, data) => {
      message.channel.send(data, {
        code: 'ascii'
      });
    });

    const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `ascii`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` ${args.join(' ')}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
}

module.exports.help = {
    name: "ascii"
}
