const mongoose=require("mongoose");


const ProductSchema = mongoose.Schema({
    name: String,
    semester: String,
    age: Number,
    address: String,
    DateOfBirth: String
});

module.exports = mongoose.model('Product', ProductSchema);