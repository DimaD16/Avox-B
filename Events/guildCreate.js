const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = async (client, guild) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(":inbox_tray: Le bot à rejoint un serveur ! ")
    .setColor(`GREEN`)
    .setDescription(`Le bot est sur ${client.guilds.cache.size} serveurs !`)
    .addField(`Nom :`, `${guild.name}`, true)
    .addField(`ID :`, `${guild.id}`, true)
    .addField(`Membres :`, `${guild.memberCount}`, true)
    .addField(`Tu veut rejoindre le serveur :`, `${guild.createInvite}`, true)
    .addField(`Toi aussi tu veut l'ajouter :`, `[Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=714452126574706720&scope=bot&permissions=8&response_type=code)`, true)

    

    client.guilds.cache.get('715523895620403211').channels.cache.get('753642325305065523').send(embed)


}
