const Discord = require('discord.js');

module.exports = {
    info: {
      name: 'blast',
    aliases: ['bomb'],
    category: 'Developer command',
    utilisation: 'you cant use this command. this command used by bot developer to blast message.',
    },
   run: async(client, message, args) =>  {
if(message.author.id !== "525675076155080704") return message.channel.send('```bash\n"❌ Only the bot creator can use this command!"```')
  if (!args[0]) return message.channel.send("Enter a message to send")
     let Text = args.join(" ")    

var guilds = client.guilds.cache
  try {
    const embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setAuthor(`${client.user.username} Announcement`)
    .setDescription(Text)
    .setThumbnail(`${client.user.displayAvatarURL()}`)
    .setFooter("© super Singer")
    .setTimestamp()
    guilds.forEach(guild =>{
        
        guild.channels.cache.find(c => c.type === 'text').send(embed)
        

    });
  } catch (err) {
      console.log(err)
  }
    
    
    }
           
        
    }





   


