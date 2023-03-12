const router = require('express').Router()
const PolarDBConnection = require('../PolarDB.config')


// GET PRODUCTS

router.get('/get-all-products',(req,res)=>{
    const SQL = "SELECT * FROM products;"
    PolarDBConnection.query(SQL, (err ,result)=>{
        if(err){
            res.status(500).send({err,msg:"Something went wrong"})
        }else{
            res.status(200).send({result,msg:"Data Recived"})
        }
    })
})

// GET ONE PRODUCT

router.get('/get-one-product/:id',(req,res)=>{
    const id = req.params.id
    const SQL = `SELECT * FROM products WHERE id = ${id};`
    PolarDBConnection.query(SQL, (err ,result)=>{
        if(err){
            res.status(500).send({err,msg:"Something went wrong"})
        }else{
            res.status(200).send({result,msg:"Data Recived"})
        }
    })
})


// ADD PRODUCT

router.post('/add-product',(req,res)=>{

    const category = req.body.category;
    const name = req.body.name;
    const company = req.body.company;
    const product_description = req.body.product_description;
    const product_details = req.body.product_details;
    const amazonPrice = req.body.amazonPrice;
    const flipkartPrice = req.body.flipkartPrice;

    console.log(category,
        name,
        company,
        product_description,
        product_details,
        amazonPrice,
        flipkartPrice)

    const SQL = `INSERT INTO products (category, name, company, product_description, product_details,amazonPrice,filpkartPrice) VALUES ("${category}", "${name}", "${company}", "${product_description}", "${product_details}", "${amazonPrice}","${flipkartPrice}");`

    PolarDBConnection.query(SQL, (err ,result)=>{
        if(err){
            res.status(500).send({err,msg:"Something went wrong"})
        }else{
            res.status(200).send({result,msg:"Data Added"})
        }
    })

})

module.exports = router