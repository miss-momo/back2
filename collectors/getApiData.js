'use strict';
const { response } = require('express');
const superagent=require('superagent');



const getApiData= async(req,res)=>{
await superagent.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
.then((response)=>{
    res.send(response.body.drinks);
})
}



// const getApiData = (req,res)=>{
// let url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`;
// superagent.get(url).then((response)=>{
//     res.send(response.body.drinks);
// })
// }

// const getApiData=(req,res)=>{
// superagent.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass').then((response)=>{
//     const apiData=response.body.drinks.map((item,idx)=>{
// return new newObj(item);

//     })
//     res.send(apiData);
// })


// }

// class newObj{
//     constructor(data){
//         this.title=data.strDrink,
//         this.img=data.strDrinkThumb
//     }
// }

module.exports=getApiData;