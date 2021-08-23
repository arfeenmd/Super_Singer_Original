const { MessageEmbed } = require('discord.js')


const disbut = require('discord.js-buttons')
module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        const embed0 = new MessageEmbed()
            .setTitle("Prefix: `#`")
            .setAuthor(`Super Singer Help Guide`)
            .setColor(0x5126c7)
            .setThumbnail(`https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg`)
            .setDescription(`Hello <@${message.author.id}>, please choose yourself with this reaction by reading in this embed!\n\n`)
            .setImage(`https://i.gifer.com/Tm4j.gif`)
            .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
            .addField("**Music Commands**", "🎶", false)
            .addField("**Other Commands**", "⚙️", false)
            .addField("**Report Commands**", "📝", false)
          
            .addField("**Home**", "🏠", false)
            .setTimestamp()
        message.channel.send(embed0).then(m => {
            m.react("🎶")
            m.react("⚙️")
            m.react("📝")
            
            m.react("🏠")


            const filter0 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === message.author.id;
            const collector0 = m.createReactionCollector(filter0, { max: 9, time: 5 * 60 * 1000 });

            collector0.on('collect', () => {

                const embed = new MessageEmbed()
                    .setTitle("Prefix: `#`")
                    .setAuthor(`Super Singer Help Guide`)
                    .setColor(0x5126c7)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg`)
                    .setDescription(`Hello <@${message.author.id}>, please choose yourself with this reaction by reading in this embed!\n\n`)
                    .setImage(`https://i.gifer.com/Tm4j.gif`)
                   .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
                    .addField("**Music Commands**", "🎶", false)
                    .addField("**Other Commands**", "⚙️", false)
                    .addField("**Report Commands**", "📝", false)
                    
                    .addField("**Home**", "🏠", false)
                    .setTimestamp()
                m.edit(embed).then(m => {
                    m.reactions.resolve("🏠").users.remove(message.author.id);
                })
            });


            const filter = (reaction, user) => reaction.emoji.name === "🎶" && user.id === message.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("Music Commands")
                    .addField("**play**", "`To play a music`")
                    .addField("**stop**", "`To stop playing the music`")
                    .addField("**leave**", "`Leave Bot from voice channel`")
                    .addField("**loop**", "`To enable/disable loop mode`")
                    .addField("**lyrics**", "`Get lyrics of playing song`")
                    .addField("**nowplaying**", "`To see now playing song details`")
                    .addField("**pause**", "`To pause the playing song`")
                    .addField("**resume**", "`To resume the playing song`")
                    .addField("**Playlist**", "`Play music via youtube playlist`")
                    .addField("**queue**", "`To see the upcoming songs`")
                    .addField("**remove**", "`To remove song from playing`")
                    .addField("**search**", "`To search songs`")
                    .addField("**shuffle**", "`Shuffle song`")
                    .addField("**skip**", "`To skip the playing song`")
                    .addField("**skipto**", "`To skip one song to another with the help of queue number`")
                    .addField("**Volume**", "`To adjust the volume`")
                    .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
                  
                m.edit(embed).then(m => {
                    m.reactions.resolve("🎶").users.remove(message.author.id);
                })
            });

               
            const filter1 = (reaction, user) => reaction.emoji.name === "⚙️" && user.id === message.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 })

            collector1.on('collect', () => {
                const embed1 = new MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor('Other Commands')
                    .addField("**botinfo**", "`Get info about the bot`")
                    .addField("**donate**", "`To support us`")
                    .addField("**tts**", "`Convert your text message to voice`")
                    .addField("**invite**", "`Get invite link of the bot`")
                    .addField("**ping**", "`Get information about bot latency`")
                    .addField("**uptime**", "`See the bot uptime`")
                    .addField("**serverinfo**", "`Get info about the server`")
                    .addField("**support**", "`Get support server Link`")
                    .addField("**vote**", "`Vote our bot in discord bot websites`")
                   .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
                m.edit(embed1).then(m => {
                    m.reactions.resolve("⚙️").users.remove(message.author.id);
                })
            });

            const filter3 = (reaction, user) => reaction.emoji.name === "📝" && user.id === message.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 })
                collector3.on('collect', () => {
                const embed3 = new MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor('Report Commands')
                    .addField("**bugreport**", "`Found any issue with our bot report us`")
                    .addField("**feedback**", "`Send your feedback to us`")
                    .setFooter('© Super Singer', 'https://cdn.discordapp.com/attachments/816280803545841704/864422503359184906/photo-1614680376573-df3480f0c6ff.jpg')
                 m.edit(embed3).then(m => {
                    m.reactions.resolve("📝").users.remove(message.author.id);
                })

            });
        })
  }  }    
         
        
    
 

