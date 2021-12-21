const Discord = require("discord.js");
module.exports = {
   name: "ip",
    aliases: ["ip"],
  run: async (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Divirta-se! Aprove')
.setDescription(`**JAVA:**\nkettraworld.jogar.io\n\n**Bedrock:**\nkettra.ddns.net\nporta: 10001`)
.setTimestamp()
.setColor("RANDOM")
message.channel.send({ embeds: [embed] })
  }
  //@kettraworld
  }