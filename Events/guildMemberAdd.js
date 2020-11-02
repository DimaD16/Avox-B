const Discord = require('discord.js')

module.exports = async (client, member) => {

    if(member.guild.id == '715523895620403211') return client.guilds.cache.get('715523895620403211').channels.cache.get('764855220642643968').send(`**<a:love:767420682455351359>・Bienvenue ${member} !** Merci d'avoir rejoint, nous sommes maintenant **${member.guild.memberCount}** !`) ;
} 