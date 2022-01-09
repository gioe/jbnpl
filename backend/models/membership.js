const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    guid: {
        type: String,
        required: true,
    },
    institution_code: {
        type: String,
    },
    name: {
        type: String,
    },
    aggregated_at: {
        type: String,
    },
    is_being_aggregated: {
        type: Boolean,
    },
    successfully_aggregated_at: {
        type: String,
    },
    connection_status: {
        type: String,
    },
    is_authenticated: {
        type: Boolean,
    },
    user_guid: {
        type: String,
    }
})

module.exports = mongoose.model("Membership", membershipSchema);
