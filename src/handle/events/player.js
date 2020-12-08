const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
client.player.on("trackStart", (message, track) => {
  const Embed = new MessageEmbed()
	.setColor("GREEN")
	.setTitle("▶️ Now Playing:")
	.setImage(track.thumbnail)
	.setDescription(`[${track.title}](${track.url})
\`${track.duration}\` [<@${track.requestedBy.id}>]`)
  .setFooter(track.author)
	.setTimestamp();
	
	message.channel.send(Embed)
});

client.player.on("trackAdd", (message, track) => {
	const Embed = new MessageEmbed()
	.setColor("GREEN")
	.setDescription("Track Has Ben Added in Queue")
	.setTimestamp();
	
	message.channel.send(Embed)
});

client.player.on("searchResults", async (message, query, track) => {
	const Embed = new MessageEmbed()
	.setColor("YELLOW")
	.setTitle(`Your Results For ${query}`)
	.setDescription(track.slice(0, 10).map((t, i) => `${i + 1}. [${t.title}](${t.url}) - \`${t.duration}\``))
	.setFooter("Enter Number To Play");
	message.channel.send(Embed).then(x => x.delete({timeout: 25000}))
});

client.player.on("searchInvalidResponse", (message, query, track, content, collector) => message.channel.send(`You must send a valid number between 1 and 10!`))
client.player.on("searchCancel", (message, query, track) => message.channel.send("You did not provide a valid response.."))
client.player.on("noResults", (message, query) => message.channel.send(`No results found on YouTube for ${query}!`))

client.player.on("queueEnd", (message, queue) => {
	const Embed = new MessageEmbed()
	.setColor("RED")
	.setTitle("🚫 Queue End")
	.setDescription("Music Has Been Ended")
	
	message.channel.send(Embed)
});

client.player.on("channelEmpty", (message, queue) => {
	const Embed = new MessageEmbed()
	.setColor("RED")
	.setDescription("No Member In My Voice Channel")
	.setTimestamp();
	
	message.channel.send(Embed)
});

client.player.on("botDisconnect", (message, queue) => message.channel.send("Leaving Voice Channel...."))
client.player.on("error", (error, message) => {
    switch(error) {
        case "NotPlaying":
            message.channel.send("No music playing")
            break;
        case "NotConnected":
            message.channel.send("You are not connected in any voice channel!")
            break;
        case "UnableToJoin":
            message.channel.send("I am not able to join your voice channel, please check my permissions!")
            break;
        default:
            message.channel.send(`Something went wrong... Error: ${error}`)
    }
}); 
