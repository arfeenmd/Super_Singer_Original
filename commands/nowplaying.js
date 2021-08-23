const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")
const createBar = require("string-progressbar");

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
  
 const queue = message.client.queue.get(message.guild.id);
        const emptyQueue = new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
          //  .setTitle("Empty Queue")
            .setDescription(":x:・There is nothing playing in the server dude!");

        if (!queue) return message.reply(emptyQueue).catch(console.error);
        const song = queue.songs[0];
        const seek =
            (queue.connection.dispatcher.streamTime -
                queue.connection.dispatcher.pausedTime) /
            1000;
        const left = song.duration - seek;




    try {
        let nowPlaying = new MessageEmbed()
        
           .setAuthor("Now Playing!", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
            .setThumbnail(song.thumbnail)
          
            .setColor("BLUE")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration, true)
            .addField("Requested by", message.author, true)
        
            .setFooter(`Loop: ${queue.loop ? "On" : "Off"} | Volume: ${queue.volume}%`);

        return message.channel.send(nowPlaying)
        } catch(err) {
          message.channel.send(new MessageEmbed()
          .setColor(message.guild.me.displayHexColor)
          .setDescription(`Now Playing in the server: **[${song.title}](${song.url})**`)
          .setThumbnail(`${song.thumbnail}`))
        }
  },
};
