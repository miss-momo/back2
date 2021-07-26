const cors=require('cors');
const express=require('express');
const Mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const superagent=require('superagent');

const port=process.env.PORT;

Mongoose.connect('mongodb://localhost:27017/practiceDrinks2', {useNewUrlParser: true, useUnifiedTopology: true});
// middle ware 
app.use(cors()); 
app.use(express.json());

// proof endpint
app.get('/',(req,res)=>{
    res.send('everything is ok');
})


const getApiData=require('./collectors/getApiData');
app.get('/getApiData',getApiData);

const crud = require('./collectors/CRUD');

app.post('/addToFav',crud.addToFav);
app.get('/getFavData',crud.getFavData);
app.delete('/deleteFavData/:id',crud.deleteFavData);
app.put('/updateFavData/:id',crud.updateFavData);






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })