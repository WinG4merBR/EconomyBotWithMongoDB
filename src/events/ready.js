module.exports = class Ready {
    constructor(client) {
        this.client = client;
    }

    async run() {
        console.info(`[READY] - Conectado como ${this.client.user.tag}`);
    }
}