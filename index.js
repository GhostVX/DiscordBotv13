const Discord = require("discord.js"); 
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client({intents: 32767});
const { joinVoiceChannel } = require('@discordjs/voice');
client.login(config.token); 




client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

client.categories = fs.readdirSync(`./src/commands/`);

fs.readdirSync('./src/commands/').forEach(local => {

    const comandos = fs.readdirSync(`./src/commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {

        let puxar= require(`./src/commands/${local}/${file}`)

        if(puxar.name) {

            client.commands.set(puxar.name, puxar)

        } 

        if(puxar.aliases && Array.isArray(puxar.aliases))

        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))

    } 

});

client.on("messageCreate", async (message) => {

    let prefix = config.prefix;

  

      if (message.author.bot) return;

      if (message.channel.type == 'dm') return;     

  

       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    

      if(message.author.bot) return;

      if(message.channel.type === 'dm') return;

  

      if(!message.content.startsWith(prefix)) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);

  

      let cmd = args.shift().toLowerCase()

      if(cmd.length === 0) return;

      let command = client.commands.get(cmd)

      if(!command) command = client.commands.get(client.aliases.get(cmd)) 

    

  try {

      command.run(client, message, args)

  } catch (err) { 

 

     console.error('Erro:' + err); 

  }

      });
      
fs.readdir("./src/events/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    const event = require(`./src/events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Carregado: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});
/*
client.on('guildMemberAdd', async (member) => {
    
    let guild = client.guilds.cache.get("893997835412971570"); 
    let channel = client.channels.cache.get("913469099332493464"); 
    let welcome = new Discord.MessageEmbed()
    
        .setColor("RANDOM")
        .setTitle("Seja bem vindos a Kettra")
        .setDescription(`${member.user.tag} Estamos atualmente com ${member.guild.memberCount} membros\nQue tal chamar mas amigos?\n\n**Quem Somos?**\n:rice_scene: KettraWorld é um servidor de minecraft rpg com estilo medieval\nVoçe começara sua jornada com a gente e escrever sua própria história :book:\n\n**Veja nossas regras!**\nimportante que vocé lé as nossas regras para manter uma boa convivencia com as pessoas! **Digite K.ip e digo no pv!**`)
        .setThumbnail(`${member.displayAvatarURL()}`)
        .setImage(`https://kettraworld.github.io/assets/wel.jpg`)
         .setTimestamp()

    await channel.send({ content: `${member}`, embeds: [welcome] })
  

});
client.on("ready", async () => {
  const guild = await client.guilds.fetch("893997835412971570");
  const connection = joinVoiceChannel({
      channelId: "894004767762825237",
      guildId: "893997835412971570",
      adapterCreator: guild.voiceAdapterCreator
  })
}) *\
