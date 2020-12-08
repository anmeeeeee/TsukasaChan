const { readdirSync } = require("fs");

module.exports = (client) => {
	const events = readdirSync("./events/client/");
  for (const event of events) {
    const file = require(`./events/client/${event}`).default;
    client.on(event.split(".")[0], (...args) => file(client, ...args));
  }
};
