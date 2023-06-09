const mongoose = require('mongoose');
const blurprint = mongoose.Schema({
    gamename: String,
    price: String,
    image: String,
    available: Boolean,
    details:String,
    reviews:String
})
module.exports = mongoose.model('gameData',blurprint)