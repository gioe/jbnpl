const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    guid: {
        type: String,
        required: true,
    },
    item_name: {
        type: String
    },
    total_cost: {
        type: Number
    },
    total_payments_required: {
        type: Number
    },
    apr: {
        type: Number
    },
    first_payment_date: {
        type: String
    },
    payments: [{
        type: ObjectId,
        ref: "Payment"
    }],
})

module.exports = mongoose.model("Transaction", transactionSchema);
