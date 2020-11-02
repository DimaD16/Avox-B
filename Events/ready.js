const Discord = require("discord.js");
const client = new Discord.Client();
var snekfetch = require("snekfetch");

module.exports = async(client) => {

    const users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
    const server = client.guilds.cache.size

  let status_liste = [
    `a!help | ${server} serveurs`,
    `a!help | ${users} users`
  ]
client.user.setActivity()
  setInterval(() => {
    let st = Math.floor((Math.random() * status_liste.length));
    client.user.setActivity(status_liste[st], { type: 'WATCHING'})

  }, 6000)

  //let random = [
    //`a!help | ${server} serveurs`
    //`a!help | ${users} users`
  //]
  
  //setInterval(() => {
  //let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)

      //client.user.setActivity(random[st], { type: 'WATCHING'})})

  }