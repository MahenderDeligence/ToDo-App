

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    endpoint: String,
    keys: Schema.Types.Mixed,
    createDate: {
        type: Date,
        default: Date.now
    }
});

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification
