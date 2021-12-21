const Discord = require("discord.js");
module.exports = {
   name: "icon",
    aliases: ["icon"],
  run: async (client, message, args) => {
  const sicon = message.guild.iconURL({ dynamic : true, format: "png", size: 1024});
  const svicon = message.guild.iconURL()

  const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, svicon)
    .setTitle(`Ícone do servidor:`)
    .setDescription(`[Link da imagem aqui](${sicon})`)
    .setImage(sicon)
    .setColor('#ef00ff')
    .setFooter(`Comando dado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

  await message.channel.send({ embeds: [embed] })
} 
}