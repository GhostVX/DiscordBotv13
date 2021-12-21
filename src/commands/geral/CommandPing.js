const Discord = require("discord.js");
module.exports = {
   name: "ping",
    aliases: ["ping"],
  run: async (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription(`:ping_pong: Meu ping é de ${client.ws.ping}`)
.setColor("RANDOM")
message.channel.send({ embeds: [embed] })

  }
  //@kettraworld
  }