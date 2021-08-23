const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const ytdlDiscord = require("erit-ytdl");
const sendError = require("../util/error");
const scdl = require("soundcloud-downloader").default;
const { STAY_TIME } = require("../../config.json");

module.exports = {
    async play(song, message) {


 let config;

    try {
      config = require("../config.json");
    } catch (error) {
      config = null;
    }

    const PRUNING = config ? config.PRUNING : process.env.PRUNING;
    const SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;



        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            sendError(
                "Music is Over",
                message.channel
            );
            
            message.client.queue.delete(message.guild.id);
            return;
        }
        let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";

    try {
      if (song.url.includes("youtube.com")) {
        stream = await ytdlDiscord(song.url, { highWaterMark: 1 << 25 });
      } else if (song.url.includes("soundcloud.com")) {
        try {
          stream = await scdl.downloadFormat(
            song.url,
            scdl.FORMATS.OPUS,
            SOUNDCLOUD_CLIENT_ID
          );
        } catch (error) {
          stream = await scdl.downloadFormat(
            song.url,
            scdl.FORMATS.MP3,
            SOUNDCLOUD_CLIENT_ID
          );
          streamType = "unknown";
        }
      }
    } catch (error) {
            if (queue) {
                queue.songs.shift();
                module.exports.play(queue.songs[0], message);
            }
        }

        queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));

        const dispatcher = queue.connection
            .play(stream, { type: streamType })
            .on("finish", () => {
                const shiffed = queue.songs.shift();
                if (queue.loop === true) {
                    queue.songs.push(shiffed);
                }
                module.exports.play(queue.songs[0], message);
            })
            .on("error", (err) => {
                console.error(err);
                queue.songs.shift();
                module.exports.play(queue.songs[0], message);
            });

        dispatcher.setVolumeLogarithmic(queue.volume / 100);

if (message.guild.me.voice.channel) { // Checking if the bot is in a VoiceChannel.
    message.guild.me.voice.setSelfDeaf(true); // Using setSelfDeaf to self-deafen the bot.
};

const seek =(queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;
    const track = queue.songs[0];


        let thing = new MessageEmbed()
          .setImage("https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif")
            .setAuthor("Started Playing Music!", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
            .setThumbnail(song.thumbnail)
          
            .setColor("BLUE")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration || "-", true)

            .addField("Requested by", message.author, true)
        
            .setFooter(`Loop: ${queue.loop ? "On" : "Off"} | Volume: ${queue.volume}%`);

                   queue.textChannel.send(thing)




   

        
    },
};
