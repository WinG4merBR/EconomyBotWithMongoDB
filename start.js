const BotClient = require("./src/Client");
const client = new BotClient({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const config = require("./config.json");

client.loadCommands();
client.loadEvents();
client.login(config.token);