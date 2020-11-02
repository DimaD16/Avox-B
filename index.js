const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login("")
client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name , commande);

        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});


client.on('message', function (message) {
    if (message.content === "<@714452126574706720>") {
        message.channel.send("Mon prefix est a!")
        console.log('répond à msg')
    }
})

client.on('message', function (message) {
    if (message.content === "Salut") {
        message.channel.send(`Salut ${message.author}, comment tu vas ?`)
    }
})

client.on('message', function (message) {
    if (message.content === "salut") {
        message.channel.send(`Salut ${message.author}, comment tu vas ?`)
    }
})

client.on('message', function (message) {
    if (message.content === "calc") {
        message.channel.send(1+1)
    }
})



