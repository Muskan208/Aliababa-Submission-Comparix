import axios from 'axios';
import React from 'react'

export default function Admin() {

    const categories = ["All", "Best Seller", "T.V", "Electronics", "Fashion", "Mobiles", "Bean Bag", "Furniture", "Tablet", "Books", "Movie Ticket", "Groceries", "Home Furnishing", "Jewely", "Footwear & Shoes", "Clothing & Apparel"];

    const [name, setName] = React.useState("");
    const [desc, setdesc] = React.useState("");
    const [company, setcompany] = React.useState("");
    const [details, setdetails] = React.useState("");
    const [category, setcategory] = React.useState("");
    const [amazonPrice, setamazonPrice] = React.useState("");
    const [flipkartPrice, setflipkartPrice] = React.useState("");

    const addProduct = () => {
        if (!name || !desc || !company || !details || !category || !amazonPrice || !flipkartPrice) {
            alert("Fill all fileds")
            return
        }

        axios.post("http://localhost:5000/product/add-product/", {
            category: category,
            name: name,
            company: company,
            product_description: desc,
            amazonPrice : amazonPrice,
            flipkartPrice:flipkartPrice,
            product_details: `[${details}]`,
        })
        .then((res)=>{
            alert("ADDED")
        })
        .catch((err)=>{
            alert("Something went wrong")
        })
    }

    return (
        <div className='AdminPageContainer'>

            <h1>Admin Page</h1>
            <p>Add Product</p>

            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Product Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} id='name' name="name" placeholder='Product name' />
                <label htmlFor="desc">Product Description</label>
                <input onChange={(e) => setdesc(e.target.value)} type="text" id='desc' name="desc" placeholder='Product Description' />
                <label htmlFor="company">Company Name</label>
                <input onChange={(e) => setcompany(e.target.value)} type="text" id='company' name="company" placeholder='Company' />
                <label htmlFor="details">Product details</label>
                <input onChange={(e) => setdetails(e.target.value)} type="text" id='details' name="details" placeholder='Product details ","  seperated' />
                <label htmlFor="aP">Amazon Price</label>
                <input onChange={(e) => setamazonPrice(e.target.value)} type="text" id='aP' name="aP" placeholder='Amazon Price' />
                <label htmlFor="fP">Flipkart Price</label>
                <input onChange={(e) => setflipkartPrice(e.target.value)} type="text" id='fP' name="fP" placeholder='Flipkart Price' />

                <select name="category" id="" onChange={(e) => setcategory(e.target.value)}>
                    {
                        categories.map((e, index) => {
                            return (<option key={index} value={e}>{e}</option>)
                        })
                    }
                </select>

                <input onClick={addProduct} type="submit" value="Add Product" />


            </form>


        </div>
    )
}
