const Discord = require("discord.js")

module.exports = {
  info: {
    name: "bugreport",
    description: "any problem with our bot or you found any bug use this command we will solve",
   usage: "",
    aliases: ["bug-report"],
  },
   

run: async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let uid = message.author.id;
let guild = message.guild.name;
let gid = message.guild.id;
let channel = bot.channels.cache.get("837984961092780032")
let embed = new Discord.MessageEmbed()
.setTitle(`Bug Report in Super Singer`)
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug)
.addField("Reported By", user)
.addField("Reported User ID", uid)
.addField("Reported Guild Name ", guild)
.addField("Reported Guild ID", gid)
.setColor("BLACK")
.setTimestamp()
.setFooter("New Bug Found")

message.reply("**🛠 Your bug has been reported in the official server. It will be reviewed so please be patient.**")
channel.send(embed).then(i => i.react("⏳"))


}
};