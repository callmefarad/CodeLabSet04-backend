const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    imagePath:{
        type: String,
        required: true,
    },
    cloudinaryPath:{
        type: String,
        required: true,
    },
})

const marketModel = mongoose.model('marketModel', marketSchema);

module.exports = marketModel;