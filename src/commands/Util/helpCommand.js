const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "help",
	alias: ["command", "cmd"],
	category: "⚙️ Utility",
	run: async(client, message, args) => {
	if (args[0])
	const command = await client.commands.get(args[0]);
	
	if (!command) {
        return message.channel.send("Command does not exist");
      }
      
    const Embed = new MessageEmbed()
    .setAuthor(command.name, message.displayAvatarURL({dynamic: true})
    .addField("Aliases Command:", command.alias || "-")
    .addField("Description:", command.description || "-")
    .addField("Usage:", command.usage || "-")
    .setFooter(client.user.username, client.user.displayAvatarURL({size: 256});
    
    message.channel.send(Embed)
    } else {
    	const commands = await client.commands;
    const Eh = new MessageEmbed()
    .setColor("YELLOW")
    .setDescription("Use *help <Cmd> for more information")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL());
    
    let com = {};

      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";

        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }

        com[category].push(name);
      }

      for (const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}`, desc);
      }

      return message.channel.send(emx);
    }
  }
};
