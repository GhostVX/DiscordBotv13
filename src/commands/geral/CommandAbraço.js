const Discord = require('discord.js');
module.exports = {
  name: "Abraço",
  aliases: ['abraçar', 'Abraço'],
  async run(client, message, args) {

var list = [
  'https://media.discordapp.net/attachments/922113104140181535/922113154283081808/db2eba63-50bc-4e6f-b427-d54beccf7bf7.gif',
  'https://media.discordapp.net/attachments/922113104140181535/922113154610266152/im_so_touched_thank_you.gif',
  'https://media.discordapp.net/attachments/922113104140181535/922113154903851028/Resenha__Recovery_of_an_MMO_Junkie_Anime.gif',
  'https://media.discordapp.net/attachments/922113104140181535/922113155180679178/I_Love_You_Hug_GIF_by_Funimation_-_Find__Share_on_GIPHY.gif',
  'https://media.discordapp.net/attachments/922113104140181535/922113155482673162/rakudai_kishi_no_cavalry___Tumblr.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(':people_hugging: | Abraço')
        .setColor('RED')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('abraço abraço abraço')
        .setAuthor(message.author.tag, avatar);
  await message.reply({embeds: [embed]});
  //@kettraworld
}} 