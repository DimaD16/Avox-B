const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {


    const bUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if (!bUser) return message.channel.send("\:bchercher: Je ne trouve pas cet utilisateur !");
    const bReason = args.join(" ").slice(22);
    if(!bReason) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");
 
    const banEmbed = new Discord.MessageEmbed()
        .setTitle("__**BAN**__")
        .setColor("red")
        .setDescription(`${bUser} à bien été(e) banni(e)  par <@${message.author.id}> dans le channe | Motif du BAN : ${bReason}`);
 
    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
}
 
module.exports.help = {
    name: "ban"
}