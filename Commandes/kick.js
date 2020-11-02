const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const kickUser = message.guild.member(message.mentions.mentions.first() || message.guild.members.get(args[0]));
    if(!kickUser) return message.channel.send("Je ne trouve pas cet utilisateur");
    const KickReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");
 
    const KickEmbed = new Discord.MessageEmbed()
    .setTitle("__**KICK**__")
        .setColor("red")
        .setDescription(`${kickUser} à bien été kick, Motif du kick : ${KickReason}`);
 
    message.guild.member(kickUser).kick(KickReason)
    message.channel.send(KickEmbed);
 
    return;
}
module.exports.help = {
    name: "kick"
}