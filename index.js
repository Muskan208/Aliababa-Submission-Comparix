const express = require('express')
const app = express();
const AuthRoute = require('./Routes/Auth')
const ProductRoute = require('./Routes/Product')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("COMPAIRIX")
})

app.use("/auth", AuthRoute)
app.use("/product", ProductRoute)

app.listen(5000, ()=>{
    console.log("Running at 5000")
})
