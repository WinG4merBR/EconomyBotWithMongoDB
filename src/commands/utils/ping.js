module.exports = class Ping {
    constructor(client) {
        this.client = client;
    } 

    async run(message) {
        message.reply("Pong!");
    }
}