const router = require('express').Router()
const PolarDBConnection = require('../PolarDB.config')


// LOGIN ROUTE

router.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const SQL = `SELECT * FROM users WHERE username = '${username}';`

    PolarDBConnection.query(SQL, (err ,result)=>{
        if(err){
            res.status(500).send({err,msg:"Internal Server Error"})
        }

        if(result.length == 0){
            res.status(404).send({msg:"user not found"})
        }

        else if(result[0].password === password){
            res.status(200).send({result,msg:"login success!"})
        }else{
            res.status(400).send({msg:"incorrect password"})
        }

 
    })

    

    
})


//REGISTER ROUTE
router.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const SQL = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`

    PolarDBConnection.query(SQL, (err ,result)=>{
        if(err){
            res.status(500).send({err,msg:"Username ALready in use"})
        }else{
            res.status(200).send({result,msg:"user registered succecsfully"})
        }
    })

    
})

module.exports = router