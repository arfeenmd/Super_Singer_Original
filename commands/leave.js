const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["goaway", "disconnect"],
        description: "Leave The Voice Channel!",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you have need to be in a voice channel before doing!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel please check!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("I'm Trying To Leave The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Leaved the Voice Channel", "https://i.pinimg.com/originals/de/58/4d/de584db3307b8631ddde6b432830dbcf.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Left The Voice Channel.")
            .setImage("https://media4.giphy.com/media/wKnceDnhLqX70U9a2V/giphy.gif")
            .setFooter(`Bot creator TOM WNL#8625`)
            .setTimestamp();
            
        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel successfully"));
    },
};
