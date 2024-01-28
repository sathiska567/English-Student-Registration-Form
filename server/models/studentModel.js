const mongoose = require('mongoose');

const studentRecordSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Your details are required!"]
    },
    nameWithInitials: {
        type: String,
        required: [true, "Your details are required!"]
    },
    email: {
        type: String,
        required: [true, "Your details are required!"]
    },
//     address: {
//         type: String,
//         required: [true, "Your details are required!"]
//     },
    mobileNumber: {
        type: Number,
        required: [true, "Your details are required!"]
    },
    birthDay: {
        type: Object,
        required: [true, "Your details are required!"]
    },
    school: {
        type: String,
        required: [true, "Your details are required!"]
    },
    examination: {
        type: Array,
        required: [true, "Your details are required!"]
    },

    cambrige: {
     type:String,
     required: [true, "Your details are required!"]
    },

    elocution: {
     type:String,
     required: [true, "Your details are required!"]
    },

    general: {
     type:String,
     required: [true, "Your details are required!"]
    },

});

// Define mongoose model
const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

// Export the model
module.exports = StudentRecord;
