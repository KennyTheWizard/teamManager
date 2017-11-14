// require mongoose
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    position: String,
    status: [Number]
}, {timestamps:true})

const Player = mongoose.model('Player', PlayerSchema);