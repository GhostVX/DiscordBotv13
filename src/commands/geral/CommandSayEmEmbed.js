const Discord = require ("discord.js");

module.exports = {
    name: "say",
    aliases: ["sayembed", "dizerembed"],
  run: async (client, message, args) => {

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Você não mencionou um canal!');   

    const mensagem =  args.slice(1).join(' ');
    if (!mensagem) return message.reply("Defina uma mensagem para ser enviada! :)");
//@kettraworld
    const say = new Discord.MessageEmbed()

    .setDescription(`${mensagem}`)
    .setColor(`#FFFFFF`)

    channel.send({ embeds: [say] });
    message.delete();
    }
} 
