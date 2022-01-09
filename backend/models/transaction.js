const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    guid: {
        type: String,
        required: true,
    },
    category: {
        type: String
    },
    created_at: {
        type: String
    },
    posted_at: {
        type: String
    },
    top_level_category: {
        type: String
    },
    transacted_at: {
        type: String
    },
    type: {
        type: String
    },
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    membership_guid: {
        type: String
    },
    original_description: {
        type: String
    },
    user_id: {
        type: String
    }
})

module.exports = mongoose.model("Transaction", transactionSchema);
