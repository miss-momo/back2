'use strict';

const mongoose = require('mongoose');

const drinksSchema= new mongoose.Schema({
name:String,
img:String,

})

const drinksModel = mongoose.model('deinks', drinksSchema);

module.exports=drinksModel;