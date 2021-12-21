
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale('pt-br') // Local do fuso horário
const now = moment();


module.exports = {
    name: "userinfo",
    aliases: ['user'],
    description: "Script de Userinfo",
    run: async(client, message, args) => {
        
        const Anoni = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        const Membro = message.guild.members.cache.get(Anoni.id);

        const Response = new MessageEmbed()
        .setAuthor(`${Anoni.username}#${Membro.user.discriminator}`, Anoni.displayAvatarURL({dynamic: true}))
        .setThumbnail(Anoni.displayAvatarURL({dynamic: true}))
        .setDescription("**__Informações do usuário a baixo:__**")
        .setColor("RANDOM")
        .addField("ID do usuário", `${Anoni.id}`, false)
    
        .addField("Membro do servidor desde:", `${moment(Membro.joinedAt).format('DD/MM/YYYY HH:mm:ss')}\n**-** ${moment(Membro.joinedAt).startOf('day').toNow()}`)
        .addField("Usuário do Discord desde:", `${moment(Anoni.createdAt).format('DD/MM/YYYY HH:mm:ss')}\n**-** ${moment(Anoni.createdAt).startOf('day').toNow()}`)
        .addField("Cargos",`${Membro.roles.cache.map(r => `${r}`).join(' ').replace("@everyone", " ")}`)
        message.reply({ embeds: [Response]}); 
    }
}

