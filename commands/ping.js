const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ping",
    description: "To check bot ping ",
    usage: "[ms]",
    aliases: ["ping"],
  },
  run: async(client, message, args) => {
   /** let embed = new Discord.MessageEmbed()
    .setTitle("Calculating ping...")
    .setDescription("This may take some second")
    .setColor("GREEN")
    message.channel.send(embed).then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message
      .createdTimestamp;

      let resultEmbed = new Discord.MessageEmbed()
      .setTitle("    :ping_pong: Pong!")
      .setDescription(`🟢 Bot latency: ${ping}ms \n\n🟡 API latency: ${client.ws.ping}ms`)
      .setColor("GREEN")
      .setThumbnail("https://media1.giphy.com/media/1pA5zQtbnHeIpOX5wX/source.gif")
      .setTimestamp()

      resultMessage.edit(resultEmbed);
      
      })
       **/

      const roleColor =
    message.guild.me.displayHexColor === "#000000"
      ? "#ffffff"
      : message.guild.me.displayHexColor;
      
      let circles = {
          green: "<a:greencircle:865563634688196649>",
          yellow: "<a:yellowloading:865563744162283541>",
          red: "<a:red:865563826123964416>"
      }
    const msg = await message.channel.send(new MessageEmbed()
      .setColor("RED") //you can change this
      .setTitle(`${client.user.username}`)
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
      .addField("API", 
          `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
      )
        
           .setDescription(`About Ping: \n${circles.green} - Good ${circles.yellow} - Okay ${circles.red} - Bad`)
    .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')

      )

      let ping = msg.createdTimestamp - message.createdTimestamp;
    
      msg.edit(
          new MessageEmbed()
          .setColor(roleColor)
          .setTitle(`${client.user.username}`)
          .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
         .addField("Bot Latency",
          `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
          )

          .addField("API", 
          `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
      )
         
          
          
           .setDescription(`About Ping: \n${circles.green} - Good ${circles.yellow} - Okay ${circles.red} - Bad`)

         .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
         
      )

      
   
    
  }
}