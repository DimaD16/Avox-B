const Discord = require ("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission");
    if (!args[0]) return message.channel.send("Indique le nombre de messages que tu souhaites supprimer !");
    message.delete()
  
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} message(s) ont/a bien été supprimé(s) | <a:yes:722057347484090368>`)
    });

    const log = new Discord.MessageEmbed()
    .addField(`Serveur :`, message.guild.name, true)
    .addField(`ID Serveur :`, message.guild.id, true)
    .addField(`Commande :`, `8ball`, true)
    .addField(`Salon : `, message.channel.name, true)
    .addField(`Salon id : `, message.channel.id, true)
    .addField(`Auteur :`, message.author.username, true)
    .addField(`Contenue du message`, ` \`\`\` ${args.join(' ')}\`\`\` `, true)
  
    client.guilds.cache.get('715523895620403211').channels.cache.get('758013983427920012').send(log)
}
 
module.exports.help = {
    name: "clear"
}