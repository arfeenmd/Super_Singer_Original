const { MessageEmbed, version } = require('discord.js');
const moment = require('moment');
const { stripIndent } = require('common-tags');
let os = require('os')
let cpuStat = require("cpu-stat")
module.exports = {
  info: {
  name: 'stats',
    description: "To check bot info ",
   usage: "",
    aliases: [""],

  },
    run: async (client, message, args) => {

    if(message.author.id !== "525675076155080704") return message.channel.send('```bash\n"❌ Only the bot creator can use this command!"```')
    
let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map(guild => guild)
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;

            }
        
       
        
    const d = moment.duration(client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} seconds` : `${d.seconds()} seconds`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minutes` : `${d.minutes()} minutes`;
    const clientStats = stripIndent`
     📱Servers   :: ${client.guilds.cache.size}
     😊Users    :: ${client.guilds.cache.reduce(
    (prev, guild) => prev + guild.memberCount, 0)}
     📺Channels :: ${client.channels.cache.size}
     🏓WS Ping  :: ${Math.round(client.ws.ping)}ms
     ⬆️Uptime   :: ${days}, ${hours}, ${minutes} and ${seconds}
     📁Channels :: ${client.channels.cache.size}
     💻CPU      :: ${os.cpus().map(i => `${i.model}`)[0]}
     ⏳Memory    :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
     🤖Node     :: ${process.version}
     ▶️Playing  :: ${connectedchannelsamount}
     👾Discord  :: ${version}
     ✍Arch     :: ${os.arch()}
     💻Platform :: ${os.platform()}
     👨‍💻Developer:: TOM WNL#777 ID:525675076155080704
    
    `;
     
    const embed = new MessageEmbed()
      .setTitle('Bot\'s Statistics')
      .setDescription(`\`\`\`asciidoc\n${clientStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
        }
  
}

    

