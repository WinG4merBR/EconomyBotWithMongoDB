module.exports = class AtmCommand {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        const user = message.mentions.users.first() || message.author;
        const data = await this.client.db.getDocument(user.id);
        const money = await data.balance;

        message.reply(`${user} tem ${money} OiCoins`);
    }
}