const Discord = require('discord.js');


module.exports = async (client, message) => {
  if (message.author.bot) return;

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;



const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
      const mentionRegexPrefix = RegExp(`^<@!?${client.user.id}>`);
    
      if (!message.guild || message.author.bot) return;

      
     if (message.content.match(mentionRegex)) {
           const prefix1 = new Discord.MessageEmbed()
           .setTitle(`My prefix is \`\`\`${client.config.prefix}\`\`\``)
          .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription( `**For more info**\n ➡️ \`${client.config.prefix}help\` to list commands\n`)
           
           .setTimestamp()
          
            .setColor('#34ebe5')
      return message.channel.send(prefix1).then((s)=>{
         s.delete({ timeout: 60000 })
       }).catch(()=>{})

      }
    


  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command) || client.commands.find(x => x && x.info && x.info.aliases && x.info.aliases.includes(command));

 // if(message.channel.type === "dm")return message.channel.send("None of the commands work in DMs. So please use commands in server!")
  process.on("unhandledRejection", (reason, promise) => {
      try {
          console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
      } catch {
          console.error(reason);
      } 
  });
  require('events').EventEmitter.defaultMaxListeners = 75


  //Executing the codes when we get the command or aliases
  if(cmd && cmd.run){
    cmd.run(client, message, args);
  }else return
};
