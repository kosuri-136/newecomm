const mongoose = require('mongoose');
const layout = require('./model/model');
const express = require('express');
const app = express();
const cors= require('cors')
// =================================
app.use(express.json());
app.use(cors())
//==================================
app.listen(3002,()=>{
    console.log('listening to port 3002');
})
mongoose.connect('mongodb+srv://kosuriravikanth:Mongo553136@cluster0.cvvip5o.mongodb.net/ecomgamestore').then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log(err);
})
//===================== Routes
app.get('/',(req,res)=>{
    res.send('Home Route')
})
app.get('/update',async(req,res)=>{
    await layout.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})
app.post('/post',(req,res)=>{
    layout.create({
        gamename: req.body.gamename,
        price: req.body.price,
        image: req.body.image,
        available: req.body.available,
        details:req.body.details,
        reviews:req.body.reviews
    }).then(()=>{
        res.send('new Game added')
    }).catch((err)=>{
        console.log(err);
    })
})
app.post('/update',async (req,res)=>{
    const name = req.body.gamename;
    await layout.find().then((data)=>{
        for(let game of data){
            if(game.gamename === name){
                res.send(game);
                break;
            }
        }
    })
})
app.get('/update', async (req, res) => {
    const gamename = req.query.gamename;
    const data = await layout.find();
    for(let game of data){
        if(gamename===game.gamename){
            res.send(game);
            break
        }
    }  
  });
  
  app.put('/update/:gamename', async (req, res) => {
    const gameName = req.params.gamename
    console.log(gameName);
    await layout.findOneAndUpdate({ gamename: gameName }, {
        gamename: req.body.gamename,
        price:req.body.price,
        image:req.body.image,
        available: req.body.available,
        details:req.body.details,
        reviews:req.body.reviews
    }).then(async () => {
        console.log('Updated Successfully');
        const data = await layout.findOne({ gamename: gameName });
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('An error occurred');
      });
  });
  