const { Client, Collection } = require('discord.js');
const fs = require("fs");
const Mongoose = require("./structures/mongoose.js");

module.exports = class BotClient extends Client {
    constructor(options) {
        super(options);
        this.config = require('../config.json');
        this.commands = new Collection();
        this.db = new Mongoose(this.config.uri, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: "majority" }, this);
    }

    login(token) {
        super.login(token);
    }

    loadCommands() {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith(".js"));
            for (const file of commandFiles) {
                const command = new (require(`./commands/${folder}/${file}`))(this);
                const commandBind = file.split(".")[0];
                console.info(`[COMMAND] - ${commandBind} Carregado!`);
                this.commands.set(commandBind, command);
            }
        }
    }

    loadEvents() {
        const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
        for (const file of eventFiles) {
            const event = new (require(`./events/${file}`))(this);
            const eventBind = file.split(".")[0];
            console.info(`[EVENT] - ${eventBind} Carregado!`);
            this.on(eventBind, (...args) => event.run(...args));
        }
        return this;
    }
}