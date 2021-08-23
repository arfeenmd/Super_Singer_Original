const { MessageEmbed } = require("discord.js");
const {
    version
} = require("discord.js");
const moment = require("moment");
let os = require('os')
let cpuStat = require("cpu-stat")



module.exports = {
  info: {
    name: "botinfo",
    description: "To check bot info ",
   usage: "",
    aliases: ["bot", "info"],
  },
    run: async (client, message, args) => {
        //command
        let cpuLol;
        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
             
            //
            let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map(guild => guild)
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;

            }

            const botinfo = new MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setTitle("__**Stats:**__")
                .setColor("RANDOM")
                .addField("⏳ Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
                 .addField("\u200b", `\u200b`, true)

                .addField("📁 Users", `\`${client.users.cache.size}\``, true)
                .addField("📁 Servers", `\`${client.guilds.cache.size}\``, true)
                .addField("\u200b", `\u200b`, true)


                .addField("📁 Voice-Channels", `\`${client.channels.cache.filter(ch => ch.type === "voice").size}\``, true)
                .addField("📁 Connected Channels", `\`${connectedchannelsamount}\``, true)
                .addField("\u200b", `\u200b`, true)

                .addField("👾 Discord.js", `\`v${version}\``, true)
                .addField("🤖 Node", `\`${process.version}\``, true)
                
                .addField("🤖 Server cores", `\`${os.cpus().length}ms\``, true)
                
            

                .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("ℹ️ Created At", `\`${(client.user.createdAt)}\``, true)
                .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("🤖 Arch", `\`${os.arch()}\``, true)
                .addField("\u200b", `\u200b`, true)
               
                
                .addField("💻 Platform", `\`${os.platform()}\``, true)
                .addField("API Latency", `\`${(client.ws.ping)}ms\``, true)
               .addField("\u200b", `\u200b`, true)
                .setFooter("Coded by: TOM WNL#7777 ID: 525675076155080704")
            message.channel.send(botinfo)
        });
    }
};