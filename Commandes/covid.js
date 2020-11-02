const Discord = require('discord.js')
const api = require('covidapi')

module.exports.run = async (client, message, args) => {
    const data = await api.all()
    const embed = new Discord.MessageEmbed()
    .setTitle("Coronavirus stats Monde")
    .setColor("red")
    .addField("Infectée :", data.cases)
    .addField("Actif :", data.actif)
    .addField("Infectée aujourd'hui :", data.todayCases)
    .addField("état critique :", data.critical)
    .addField("Mort :", data.deaths)
    .addField("Imunisée :", data.recovered)

    message.channel.send(embed)
}


module.exports.help = {
    name: "covid"
}