const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
     
 
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    let botmessage = args.join(" "); 
    message.delete().catch();
    message.channel.send(botmessage)
    console.log(`Message say : ${botmessage}`)

}
 
module.exports.help = {
    name: "say"
}