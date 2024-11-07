const mongoose = require('mongoose');

module.exports = mongoose.model('Duty', {
    title: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    }
});
