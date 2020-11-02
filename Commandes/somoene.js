const Discord = require('discord.js');

exports.run = async(client, message, args ) => {
        
    const member = message.guild.members.cache.random(1)[0];
    
    const embed = new Discord.MessageEmbed()
        .addField("Username :", member.user.username, true)
        .addField("DISCRIMINANT :", member.user.discriminator, true)
        .addField("ID :", member.user.id, true)
        .setThumbnail(member.user.displayAvatarURL())
    
        message.channel.send(embed)

}

module.exports.help = {
    name: "randomUser"
}