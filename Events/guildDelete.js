const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = async (client, guild) => {
    

    const embed = new Discord.MessageEmbed()
    .setTitle(":outbox_tray: Le bot à quitté un serveur !")
    .setDescription(`Le bot est sur ${client.guilds.cache.size} serveurs !`)
    .addField(`Nom :`, `${guild.name}`)
    .setColor('RED')
    .addField(`Membres :`, `${guild.memberCount}`)
    .addField(`ID :`, `${guild.id}`)
    .addField(`Invite moi s'il te plait pour augmenté le nombre de serveur :`, `[Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=714452126574706720&scope=bot&permissions=8&response_type=code)`)


    

    client.guilds.cache.get('715523895620403211').channels.cache.get('753642325305065523').send(embed)

}