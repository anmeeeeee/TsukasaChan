module.exports = (client) => {
	const express = require("express");
    const app = express();
	app.get("/", (req, res) => {
    res.sendStatus(200);
});
    app.listen(process.env.PORT);
	console.log(`${client.user.username} Ready`);
	setInterval(() => {
		const Sta = [
		`${client.config.prefix} My Prefix`,
		`${client.users.cache.size} Users`,
		`${client.guilds.cache.size} Guilds`,
		`${client.channels.cache.size} Channels`
		];
		const Tus = Sta[Math.floor(Math.random() * Sta.length)];
		client.user.setActivity(Sta, { type: "WATCHING"});
		}, 20000);
}
		
