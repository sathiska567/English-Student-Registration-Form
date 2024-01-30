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

    address: {
        type: String,
        required: [true, "Your details are required!"]
    },

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

    mothersMobileNumber: {
     type:Number,
     required: [true, "Your details are required!"]
    },

    fathersMobileNumber: {
     type:Number,
     required: [true, "Your details are required!"]
    },

    grade: {
     type:Number,
    //  required: [false, "Your details are required!"]
    },

    fartherName: {
     type:String,
     required: [true, "Your details are required!"]
    },

    motherName: {
     type:String,
     required: [true, "Your details are required!"]
    },

    fartherOccupation: {
     type:String,
     required: [true, "Your details are required!"]
    },

    motherOccupation: {
     type:String,
     required: [true, "Your details are required!"]
    },

    fartherEmail: {
     type:String,
     required: [true, "Your details are required!"]
    },

    motherEmail: {
     type:String,
     required: [true, "Your details are required!"]
    },

});

// Define mongoose model
const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

// Export the model
module.exports = StudentRecord;
