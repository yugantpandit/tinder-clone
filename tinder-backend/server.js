import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import cards from "./dbCards.js"

// app config
const app = express();
const port = process.env.PORT || 8002
const connection_url = 'mongodb+srv://admin:Ss3mrM1DzvdqWO2c@cluster0.itefju5.mongodb.net/?retryWrites=true&w=majority'
//middlewares

app.use(express.json());
app.use(Cors())
// app.use(Cors());

mongoose.set('strictQuery', true);
//db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
   
    useUnifiedTopology: true,

});

//api enpoints

app.post("/tinder/cards",(req,res) =>{
    const dbCard  = req.body;

    cards.create(dbCard, (err, data) =>{
      if(err)  {
        res.status(500).send(err)
      }
      else {
        res.status(201).send(data)
      }
    })
})

app.get("/tinder/cards",(req,res) => {
    
    cards.find((err, data) =>{
        if(err){
          res.status(500).send(err)
        }
        else {
          res.status(200).send(data)
        }
      })

})

//listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));