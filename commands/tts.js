const request = require("node-superfetch");

module.exports = {
     info: {
    name: "tts",
    description: "convert your text to speech",
   usage: "text to speech",
    aliases: ["tts"],
  },
   
    run: async (bot, message, args, ops) => {
        if (!args[0])
            return message.channel.send(
                "**Please Enter Something To Convert message To Speech!**"
            );
        let text = args.join(" ");

        if (text.length > 1024)
            return message.channel.send(
                "**Please Enter Text Between 0 And 1024 Characters!**"
            );
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel)
            return message.channel.send("**Join a voice channel to use this command**");
        if (
            !voiceChannel
                .permissionsFor(message.client.user)
                .has(["CONNECT", "SPEAK"])
        ) {
            return message.channel.send(
                "**Missing permission - [CONNECT, SPEAK]**"
            );
        }


        if (bot.voice.connections.has(voiceChannel.guild.id))
            return message.channel.send("**Already converting TTS**");
        try {
            const connection = await voiceChannel.join();
            const { url } = await request
                .get("http://tts.cyzon.us/tts")
                .query({ text });
            const dispatcher = connection.play(url);

            if (message.guild.me.voice.channel) { // Checking if the bot is in a VoiceChannel.
    message.guild.me.voice.setSelfDeaf(true); // Using setSelfDeaf to self-deafen the bot.
};
            message.react("🔉");
            dispatcher.once("finish", () => voiceChannel.leave());
            dispatcher.once("error", () => voiceChannel.leave());
            return null;
        } catch (err) {
            voiceChannel.leave();
            console.log(err)
            return message.channel.send(
                `**An Error Occurred: Try Again Later!**`
            );
        }
    }
};