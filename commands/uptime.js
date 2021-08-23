const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "uptime",
    description: "To see the bot uptime",
   usage: "",
    aliases: ["up"],
  },
   
    run: async (client, message, args) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = new MessageEmbed()
            .setAuthor("Uptime of Super Singer", "https://gifimage.net/wp-content/uploads/2018/11/clock-gif-transparent-4.gif")
            .setColor("GREEN")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription(`  **__Days__** - \`${days}d\` \n\n **__Hours__** - \`${hours}hr\` \n\n **__Minutes__** - \`${minutes}mins\` \n\n **__Seconds__** - \`${seconds}sec\``);
        return message.channel.send(uptime);
    }
}
