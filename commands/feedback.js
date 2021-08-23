  
const Discord = require("discord.js");

module.exports = {
  info: {
    name: "feedback",
    description: "#feedback [your report here]. Thanks for your valuable feedback",
   usage: "",
    aliases: ["feed-back"],
  },
run: async (bot, message, args) =>  {
let feedback = args.join(" ").slice(0);
let user = message.author.username;
let uid = message.author.id;
let guild = message.guild.name;
let gid = message.guild.id;
let channel = bot.channels.cache.get("837985857096515625")
let embed = new Discord.MessageEmbed()
.setTitle(`Feedback Report in Super Singer`)
.setThumbnail("https://www.icegif.com/wp-content/uploads/heart-icegif-38.gif")
.addField("Feedback", feedback)
.addField("Feedback By", user)
.addField("Feedback User ID", uid)
.addField("Feedback Guild Name ", guild)
.addField("Feedback Guild ID", gid)
.setColor("GREEN")
.setTimestamp()
.setFooter("New Feedback Found")

message.reply("**❤️ Your Feedback has been reported in the official server. Thanks for the valuable feedback thanks for supporting us.**")
channel.send(embed).then(i => i.react("💖"))


}
};