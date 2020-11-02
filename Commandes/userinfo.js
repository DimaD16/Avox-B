const { MessageEmbed } = require("discord.js");
const moment = require("moment");
 
module.exports.run = async (bot, message, args) => {
        
        const member = message.mentions.users.first() || message.user;
        const embed = new MesssageEmbed()
    .setDescription("User Info")
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(member ? member.username : author.username)
    .addField("Tag:", member ? member.user.username : author.username)
    .addField("Discriminator", '#'+ member ? member.discriminator : author.discriminator)
    .addField("ID:", user ? client.user.username : author.username)
    .addField("Game Activity:", member.presence.game)
    .addField("Nom:", member.user.username)
    .addField("Nombres de roles:", member.roles.size - 1)
    .addField("Date de création du compte:", member.user.createdAt)
    .addField("Date d'arrivée:", member.joinedAt);
 
    message.channel.send(embed);
 
    message.delete();

    console.log('A fait userinfo.js')
}
 
module.exports.help = {
    name: "userinfo"
}