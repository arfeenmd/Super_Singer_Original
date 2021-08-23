const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "support",
    description: "support server link",
    usage: "",
    aliases: ["support"],
  },

  run: async function (client, message, args) {
    
 
    
    
     let invite = new MessageEmbed()
   
    .setAuthor("Support Server Of Super Singer", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
    .setTitle(`__Having any complain? Bugs report? or other join support server__`)
    
    .setDescription("```Support Server Link```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝗷𝗼𝗶𝗻](https://discord.gg/EJxNXkX9EX)")
   
    .setColor("YELLOW")
    .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
    
     .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
    .setTimestamp()
    return message.channel.send(invite);
  },
};
 