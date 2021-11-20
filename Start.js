const Client = require("./src/Client");
const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] });
const config = require("./config.json");

client.loadCommands();
client.loadEvents();
client.login(config.token);