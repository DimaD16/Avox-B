const Discord = require("discord.js");
fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {


const url = args[0];
if(!url){
    return message.channel.send("Merci de mettre un lien !");
}

const res = await fetch(encodeURI(`https://is.gd/create.php?format=simple&url=${url}`))
const body = await res.text();

if(body === "Error: Please enter a valid URL to shorten"){
    return message.channel.send("Merci de mettre un lien valide !");
}

const embed = new Discord.MessageEmbed()
    .setTitle("Voici ton lien raccourci : ")
    .setDescription(`Lien : ${url} \n Raccourci : ${body}`);
message.channel.send(embed);

}


module.exports.help = {
    name: "shortUrl"
}