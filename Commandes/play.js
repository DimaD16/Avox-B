const ytdl = require('ytdl-core');
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const channel = message.member.voice.channel;

    if(!channel)
    return message.channel.send("tu n'est pas dans un vocale")

    if(!args[0])
        return message.channel.send('Merci de préciser un lien Youtube');
        
        channel.join()

    const validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send('Merci de préciser un lien Youtube');

    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.VoiceChannel.join();
    const dispatcher = await connection.playStream(
        ytdl(args[0]))

    message.channel.send(`Musique ajoutée : ${info.title}`);
};

module.exports.help = {
    name: "play"
}