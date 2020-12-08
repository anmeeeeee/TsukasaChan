const { Player } = require("discord-player");
const { Collection, Client } = require("discord.js");
const client = new TsukasaClient({
    disableMentions: 'everyone',
    cacheGuilds: true,
    cacheChannels: true,
    cacheOverwrites: false,
    cacheRoles: false,
    cacheEmojis: false,
    cachePresences: false,
    fetchAllMembers: true,
    ws: { properties: { $browser: "Discord iOS" } }
});

        client.commands = new Collection();
	client.alias = new Collection();
	client.player = new Player();
	client.snipes = new Map();
	client.config.prefix = "ts.";
	client.config.token = {
		"Token": ""
	};
	
require("./handle/event");
require("./handle/CommandHandle");
client.login(client.config.token);
