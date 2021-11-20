const mongoose = require('mongoose');

module.exports = class DatabaseConnection {
    constructor(uri, parameters, client) {
        mongoose.connect(uri, parameters);

        const userSchema = new mongoose.Schema({
            _id: String,
            balance: Number,
            lastDaily: Date,
        }, { versionKey: false, id: false });

        this.user = mongoose.model('user', userSchema);
        this.client = client;
    }
    async getDocument(userID) {
        const user = await this.client.users.fetch(userID);

        if (!user) return null;

        let document = await this.user.findOne({ _id: userID });

        if (!document) {
            document = new this.user({
                _id: userID,
                balance: 0,
                lastDaily: null,
            }).save();
        }

        return document;
    }
}