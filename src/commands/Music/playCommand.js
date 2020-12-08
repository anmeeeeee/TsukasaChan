module.exports = {

	name: "play",	alias: ["p"],

	category: "🎶 Music",

	run: async(client, message, args) => {

	const Title = args.join(" ")

	if(!message.member.voice.channel) return message.channel.send("Please Join Voice Channel")

	if(!Title) return message.reply("Please Enter Song Name/Song URL")

	client.player.play(message, Title);

	}

}
