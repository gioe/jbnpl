const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    guid: {
        type: String,
        required: true,
    },
    vendor: {
        type: String
    },
    category: {
        type: String
    },
    top_level_category: {
        type: String
    },
    transacted_at: {
        type: String
    },
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    original_description: {
        type: String
    },
    type: {
        type: String
    },
    transaction_id: {
        type: String
    },
    lender: {
        type: String
    }
})

module.exports = mongoose.model("Payment", paymentSchema);
