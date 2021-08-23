const ownerid = "525675076155080704";
const { MessageEmbed } = require('discord.js');


module.exports = {
  info: {
    name: "getinvite",
    description: "get invite through bot",
   usage: "",
    aliases: ["gi"],
  },
    run: async (client, message, args) => {

  if(message.author.id !== "525675076155080704")  {
    let embed122 = new MessageEmbed()
    .setDescription("Only the bot creator can use this command!")
    return message.channel.send(embed122)
  }

if (message.author.id === ownerid) {
        let guild = null;


        if (!args[0]) {
          let embed = new MessageEmbed()
          .setDescription('Please Enter Guild ID or Guild Name')
          return message.channel.send(embed)

        }

        if(args[0]){
            let fetched = client.guilds.cache.find(g => g.name === args.join(" "));
            let found = client.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send("That's the Invalid Guild Name");
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send("Sorry, I doesn't have \`CREATE_INSTANT_INVITE\` Permission There!"); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send(`\`${args.join(' ')}\` - I'm not in that Server.`);
        }
    } else {
        return;
    }


    }
};