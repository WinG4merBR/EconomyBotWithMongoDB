module.exports = class DailyCommand {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        const data = await this.client.db.getDocument(message.author.id);

        const timeout = 43200000;
        var amount = Math.floor(Math.random() * 3200);

        const daily = await data.lastDaily;
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            return message.reply(`Você já pegou seu daily`);
        } else {
            data.lastDaily = Date.now();
            data.balance += amount;
            data.save();
            return message.reply(`Você recebeu seu daily de ${amount}`);
        }
    }
}