const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    const text = args.join(" ");
    if(!text){
        return message.channel.send("Met un text pour générer un qrcode !");
    }

    const pleaseWait = await message.channel.send("Attend...")
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`Text : ${text} \n Qr code :`)
        .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)

    pleaseWait.edit((""), { embed });
}

module.exports.help = {
    name: "qr"
}