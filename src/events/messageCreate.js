module.exports = class MessageCreate {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        const prefixRegex = new RegExp(`^(<@!?${this.client.user.id}>|${this.client.config.prefix})\\s*`);
        if (!message.content.match(prefixRegex) || message.author.bot || message.webhookID) return;

        const args = message.content.replace(prefixRegex, "").trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = this.client.commands.get(commandName);

        if (!command) return;

        function runCommand() {
            try {
                command.run(message, args);
            } catch (error) {
                console.error(error);
                message.reply("Ocorreu um erro ao executar esse comando.");
            }
        }

        try {
            await this.client.db.getDocument(message.author.id);

            return runCommand();
        } catch(err) {
            console.error(err);
            message.reply("Ocorreu um erro ao executar esse comando.");
        }
    }
}