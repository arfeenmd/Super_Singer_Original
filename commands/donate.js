const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "donate",
    description: "To donate us",
    usage: "",
    aliases: ["donate"],
  },

  run: async function (client, message, args) {
    
    
    
    let invite = new MessageEmbed()
    .setAuthor("Donate for Super Singer!")
    .setTitle("wanna donate?, donate me today!")
    .setDescription("```Donate us to support``` [𝗰𝗹𝗶𝗰𝗸 𝗵𝗲𝗿𝗲 𝘁𝗼 𝗱𝗼𝗻𝗮𝘁𝗲](https://imjo.in/9wJT4a)")
    .setColor("GREEN")
       .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
    .setImage("https://static.wixstatic.com/media/d45b9c_ffa788a940cf47b99ccd38b5f30b8825~mv2.gif")
   .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
    return message.channel.send(invite);
  },
};
 