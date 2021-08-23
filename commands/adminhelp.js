const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "adminhelp",
    description: "you can't use this commands this commands is used by bot owner",
   usage: "",
    aliases: ["tomhelp", "ah"],
  },
  run : async(client, message, args) => {
    
  if(message.author.id !== "525675076155080704")  {
    let embed122 = new MessageEmbed()
    .setDescription("Only the bot creator can use this command!")
    return message.lineReplyNoMention(embed122)
  }

const embed0 = new MessageEmbed()
            .setTitle("Prefix: `#`")
            .setAuthor(`Super Singer admin Pannel`)
            .setColor(0x5126c7)
            .setThumbnail(`https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg`)
            .setDescription(`Hello <@${message.author.id}>, please familiarize yourself with this bot by reading over this embed!\n\n`)
            
            .setFooter("© Super Singer")
            .addField("**botleave**", "To leave from a server", false)
            .addField("**stats**", "View bot stats", false)
            .addField("**serverlist**", "To view server list that bot using", false)
            .addField("**getinvite**", "To get invite link via bot", false)
            .addField("**blast**", "Send announcement message to every guild that bot in.", false)
            
            
            .setTimestamp()
        message.channel.send(embed0)


  }
}
