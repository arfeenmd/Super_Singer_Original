const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "vote",
    description: "To vote us",
   usage: "",
    aliases: ["vote", "vt"],
  },

  run: async function (client, message, args) {
    
   
    
    let invite = new MessageEmbed()
    .setAuthor("Vote for super singer", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
    .setTitle(`you can vote every 12 hours!\n\n`)
    .setDescription("```vote in top.gg```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝘃𝗼𝘁𝗲](https://top.gg/bot/821336810277175327/vote) \n\n```vote in discordbotlist```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝘃𝗼𝘁𝗲](https://discordbotlist.com/bots/super-singer/upvote) \n\n```vote in voidbots```  [𝗰𝗹𝗶𝗰𝗸 𝘁𝗼 𝘃𝗼𝘁𝗲](https://voidbots.net/bot/821336810277175327/vote)")
    
    .setColor("#00FDE4")
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
    .setImage("https://s3.amazonaws.com/snwceomedia/ids/d73c6b7b-bae6-4dbf-bd48-ffbcde4fdaf0.sized-1000x1000.gif")
    
  .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
    return message.channel.send(invite);
  },
};
 