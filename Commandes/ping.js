const Discord = require ("discord.js");
 
module.exports.run = async (client, message, args) => {
 
  let début = Date.now();

  const pleaseWait = await message.channel.send("<a:chargement:764459964676440106> Attend...")



                const embed = new Discord.MessageEmbed()
                .setTitle(`Pong ! :`)
                .addField(`Ping du message :`,`**${Date.now() - début}**ms`)

                pleaseWait.edit((""), { embed });
  }
module.exports.help = {
  name: "ping"
}