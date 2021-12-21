const Discord = require(`discord.js`);

module.exports = {
  name: "mcavatar",
  category: "mine",
  aliases: ['mchead', 'mcavatar'],
  async run(client, message, args) {
  if(message.mentions.roles.first() || message.content.includes("@") || message.content.includes("<"))
  return message.channel.send("Digite um nick de algum jogador de Minecraft, para ver o rosto da skin dele!")   
  let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let head = 'https://mc-heads.net/head/' + mesaj
 if (mesaj.length < 1) return message.reply('Você precisa colocar um player de minecraft.');
 if (mesaj == member) {
    message.reply('Você precisa colocar um player de minecraft.')
 } else {
 const mchead = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Aqui está a cabeça de: ' + mesaj)
   .setDescription(`[Clique aqui para ver!](https://mc-heads.net/head/${mesaj})`)
   .setImage(head)
  message.reply({embeds: [mchead]});
 //@kettraworld
}
}
};