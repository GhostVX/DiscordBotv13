const Discord = require("discord.js");
module.exports = {
   name: "dado",
    aliases: ["dado"],
  run: async (client, message, args) => {

 const Discord = require('discord.js');

let dado = [`1`, `2`, `3`, `4`, `5`, `6`]
 let roll = dado[Math.floor(Math.random() * dado.length)];

message.channel.send(`seu dado de 6 lados caiu no número:** ${roll} **!`)
}
}