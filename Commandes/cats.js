const Discord = require("discord.js");

fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
            const res = await fetch(encodeURI(`https://nekos.life/api/v2/img/meow`));
			const json = await res.json();
        
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Cat Random`)
            .setImage(json.url, "cat.png")

        const pleaseWait = await message.channel.send("<a:chargement:764459964676440106> Je cherche..")

        pleaseWait.edit((""), { embed });

}

module.exports.help = {

    name: "cat"
}