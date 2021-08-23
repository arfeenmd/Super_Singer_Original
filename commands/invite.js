const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
  
    
    let invite = new MessageEmbed()
   
    .setAuthor("Invite Link For Super Singer", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
    .setTitle(`Invite me today! you can choose any link you want`)
    
    .setDescription("```invite link of top.gg```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝗶𝗻𝘃𝗶𝘁𝗲](https://top.gg/bot/821336810277175327) \n\n```invite link of discordbotlist```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝗶𝗻𝘃𝗶𝘁𝗲](https://discordbotlist.com/bots/super-singer) \n\n```invite link of voidbots```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝗶𝗻𝘃𝗶𝘁𝗲](https://voidbots.net/bot/821336810277175327)")
   
    .setColor("BLUE")
    .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
    
    .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
    .setTimestamp()
    return message.channel.send(invite);
  },
};
 