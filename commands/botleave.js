const { MessageEmbed } = require("discord.js");
module.exports = {
  info: {
    name: "botleave",
    description: "you can't use this commands this commands is used by bot owner to left specific server who misleading the bot ",
   usage: "",
    aliases: ["botl", "bl"],
  },
  run : async(client, message, args) => {
    
  if(message.author.id !== "525675076155080704") return message.channel.send('Only the bot creator can use this command!')
  const id = args.join(' ')

  if(!id) return message.channel.send('Please specify a guild id')
  const guild = client.guilds.cache.get(id);

  if(!guild) return message.channel.send('I am not in that guild')
guild.leave();

    message.channel.send(`Succesfully left ${guild}`)
  }}