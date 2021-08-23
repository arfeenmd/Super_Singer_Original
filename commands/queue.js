const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const util = require("../util/pagination.js");

module.exports = {
    info: {
        name: "queue",
        description: "To show the server songs queue",
        usage: "",
        aliases: ["q", "list", "songlist", "song-list"],
    },
    run: async function (client, message, args) {
       const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
            return message.reply(
                "Missing permission to manage messages or add reactions"
            );

        const queue = message.client.queue.get(message.guild.id);

        const emptyQueue = new MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
           // .setTitle("Empty Queue")
            .setDescription("<a:SA_Loader:870254497853751307>・Nothing playing in this server to get queue info");

        if (!queue) return message.channel.send(emptyQueue);

        let currentPage = 0;
        const embeds = generateQueueEmbed(message, queue.songs);

        const queueEmbed = await message.channel.send(
            `**Page Info - ${currentPage + 1}/${embeds.length}**`,
            embeds[currentPage]
        );

        try {
            await queueEmbed.react("⬅️");
            await queueEmbed.react("➡️");
        } catch (error) {
            console.error(error);
            message.channel.send(error.message).catch(console.error);
        }

        const filter = (reaction, user) =>
            ["⬅️", "➡️"].includes(reaction.emoji.name) &&
            message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
            time: 60000,
        });

        collector.on("collect", async (reaction, user) => {
            try {
                if (reaction.emoji.name === "➡️") {
                    if (currentPage < embeds.length - 1) {
                        currentPage++;
                        queueEmbed.edit(
                            `**Page Info - ${currentPage + 1}/${
                                embeds.length
                            }**`,
                            embeds[currentPage]
                        );
                    }
                } else if (reaction.emoji.name === "⬅️") {
                    if (currentPage !== 0) {
                        --currentPage;
                        queueEmbed.edit(
                            `**Page Info - ${currentPage + 1}/${
                                embeds.length
                            }**`,
                            embeds[currentPage]
                        );
                    }
                } else {
                    collector.stop();
                    reaction.message.reactions.removeAll();
                }
                await reaction.users.remove(message.author.id);
            } catch (error) {
                console.error(error);
                return message.channel.send(error.message).catch(console.error);
            }
        });
    },
};

var generateQueueEmbed = (message, queue) => {
    let embeds = [];
    let k = 10;

    for (let i = 0; i < queue.length; i += 10) {
        const current = queue.slice(i, k);
        let j = i;
        k += 10;

        const info = current
            .map((track) => `\`${++j}\` [${track.title}](${track.url}) ${message.author}`)
            .join("\n");

        const embed = new MessageEmbed()
           // .setTitle("Song Queue\n")
            .setThumbnail(message.guild.iconURL())
            .setColor(message.guild.me.displayHexColor)
            .setAuthor("Queue List:"
            )
            .setDescription(`${info}`);
             
        embeds.push(embed);
    }

    return embeds;
    }

