const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    
    const user = message.mentions.users.first()

    let replies = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"];
    let res = Math.floor((Math.random() * replies.length));

    let LoveEmbed = new Discord.MessageEmbed()
    .setTitle("Love Pourcentage")
    .setThumbnail("https://i.skyrock.net/7333/105317333/pics/3319241746_1_2_fnMUH0A0.gif")
    .setDescription(`:heart: <@${message.author.id}> va bien à **${replies[res]}%** avec ${user ? user.username : "Avox"} :heart:`)

    message.channel.send(LoveEmbed)
}
module.exports.help = {
    name: "love"
}