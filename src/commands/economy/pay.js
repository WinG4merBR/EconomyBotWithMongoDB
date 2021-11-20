module.exports = class PayCommand {
    constructor(client) {
        this.client = client;
    }

    async run(message, args) {
        const data = await this.client.db.getDocument(message.author.id);
        const user = message.mentions.users.first();
        const money = parseInt(args[1]);
        const mentionData = await this.client.db.getDocument(user.id);

        if(!user || user === message.author) return message.reply(`Você não mencionou um usuário válido!`);
        if(!money) return message.reply(`Você não mencionou um valor válido!`);
        if(args[1].includes('-')) return message.reply(`Você não pode pagar com valores negativos!`);
        if(money > data.balance) return message.reply(`Você não tem dinheiro suficiente!`);

        data.balance -= money;
        mentionData.balance += money;
        data.save();
        mentionData.save();

        message.reply(`Você transferiu ${money} OiCoins para ${user}`);
    }
}