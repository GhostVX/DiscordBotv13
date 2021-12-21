
const {
    MessageEmbed,
    Message
} = require("discord.js");
const Discord = require('discord.js')
let cpuStat = require("cpu-stat");
let os = require("os");

module.exports = {
    name: "botinfo",
    aliases: ["bot"],

  run: async (client, message,interaction) => {
            

            let EMBED = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({dynamic: false}))
            .setDescription(`Olá, eu sou o ${client.user.username}!\n_ _`)
            .setColor('YELLOW')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .addFields(
                {
                    name: ':question: : **__Quem sou eu:__**',
                    value: `**${client.user.username}**`,
                    inline: false
                },
                {
                    name: ` :wrench: : **Discord.js:**`,
                    value: ` **${Discord.version}** `,
                    inline: false
                },
                {
                    name: ':minidisc: : **__Memória:__**',
                    value: `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB**`,
                    inline: false
                },
                {
                    name: ':space_invader: : **__Node:__**',
                    value: `**${process.version}**`,
                },
                {
                    name: ':ping_pong: : **__Meu ping:__**',
                    value: `**${client.ws.ping}ms**`,
                    inline: false
                },
            )

            message.reply({embeds: [EMBED]});

    }
} 


