const Discord = require("discord.js");

exports.run = async(client, message, args ) => {

    const titre = args[1]
    const description = args.join(" "); 

    if(!titre) return message.channel.send("Met un titre pour la suggestion !")
    if(!description) return message.channel.send("Met une description pour la suggestion !")


    const embed = new Discord.MessageEmbed()
    .setTitle(titre)
    .setDescription(description)
    .setFooter(`user : ${message.author.username}`)



    

    client.guilds.cache.get('715523895620403211').channels.cache.get('765259180021645332').send(embed).then(async (m) => {
        await m.react("✅");
        await m.react("❌")

        message.channel.send("Votre suggestion à été envoiyer !")
    })

    
}
module.exports.help = {
    name: "suggest"
}
