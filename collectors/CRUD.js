'use strict';

const superagent=require('superagent');
const drinksModel = require('../models/DrinksModel');

const addToFav = (req,res)=>{
const {name,img}=req.body;
const newDrink=new drinksModel({
    name:name,
    img:img
})
newDrink.save();
res.send(newDrink);
console.log('item added');

}
// -------------------- get fav data
const getFavData = (req,res)=>{
drinksModel.find({},(err,data)=>{
if (err){
    res.send('error in getting fav data', err);
}else{
    res.send(data);
}
}) 
}

//  -------------------- delete fav data ------
const deleteFavData = (req,res)=>{
const id=req.params._id
drinksModel.findOneAndDelete({id:id},(err,data)=>{
if (err){
    res.send(err)
}else{
    drinksModel.find({},(err,data)=>{
        res.send(data);
        console.log('item deleted');
})
}
})
}

// ------------- update fav data 
const updateFavData = (req,res)=>{
const {name,img}=req.body;
const id=req.params._id;
drinksModel.find({id:id},(err,data)=>{
if (err){
    res.send(err)
}else{
    data[0].name=name,
    data[0].img=img,
    data[0].save();
    res.send(data[0]);
    console.log('data updated');
}
})  
}

module.exports={
    addToFav,
    getFavData,
    deleteFavData,
    updateFavData,
}