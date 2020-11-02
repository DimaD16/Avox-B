const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send("Il semble qu'il n'y ai plus de nouveaux mêmes disponibles ! Réessaye plus tard.");
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posté par : " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Infos :", "Votes: " + allowed[randomnumber].data.ups + " / Commentaires : " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provenant de dankmemes")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

module.exports.help = {
    name: "meme"
}