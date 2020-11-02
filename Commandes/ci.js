const Discord= require('discord.js');
const fs = require('fs')

module.exports.run = async (client, message, args) => {
    const Prénom = JSON.parse(fs.readFileSync('name.json'))
    const name = JSON.parse(fs.readFileSync('Prénom.json'))
    const Age = JSON.parse(fs.readFileSync('age.json'))
    const couleur = JSON.parse(fs.readFileSync('couleur.json'))
    const user = message.mentions.users.first()

    const pleaseWait = await message.channel.send("<a:chargement:764459964676440106> Attend... <a:chargement:764459964676440106>")
    const embed = new Discord.MessageEmbed()
    .setTitle(`Carte d'identité de ${user ? user.username : message.author.username}`)
    .addField("Nom :", Prénom[user ? user.id : message.author.id].text, true)
    .addField("Prénom :", name[user ? user.id : message.author.id].text, true)
    .addField("Age :", Age[user ? user.id : message.author.id].text, true)
    .addField("Couleur preférer :", couleur[user ? user.id : message.author.id].text, true)
    .setFooter("Soon..")

    pleaseWait.edit((""), { embed });

}

module.exports.help = {
    name: "ci"
}