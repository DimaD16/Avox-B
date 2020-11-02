const { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
    var help = new MessageEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor("❔ - Help Avox")
    .setDescription("**Mon préfix est : `a!`**")
    .addField(":tada: -**__FUN__**", "love, 8ball, ascii, tweet, clyde, reverse")
    .addField(":fire:  - **NSFW**", "pussy, hentai")
    .addField(":hammer: - **__MODERATION__**", "ban, kick, mute/unmute, clear")
    .addField(":newspaper: - **__General__**", "qr,  shortUrl, say, ping, memberCount, sondage, heure, uptime")
    .addField(":camera_with_flash: **__IMAGE__**", "cat, dog")
    //.addField("<a:musique:731141136747593788> **__MUSIQUE__**", "play, stop | stable (no queue)")
     
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}