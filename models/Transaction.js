const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'please add a positive or negative number']
    },
    date: {
        type: Date,
        default: Date.time
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);