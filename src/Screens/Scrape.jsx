import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Graph } from '../Components/Graph';
import { ProductRadar } from '../Components/ProductRadar';
import { UserContext } from '../provider/Auth';

const Scrape = () => {
  const {user, updateUser} = useContext(UserContext)

  const [Categ, setCateg] = useState("All")
  const categories = ["All", "Best Seller", "T.V", "Electronics", "Fashion", "Mobiles", "Bean Bag", "Furniture", "Tablet", "Books", "Movie Ticket", "Groceries", "Home Furnishing", "Jewely", "Footwear & Shoes", "Clothing & Apparel"];
  const Descpoint = ["Resolution: HD Ready (1366x768) | Refresh Rate: 50 hertz", "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices", "Sound output: 10 Watts Output I 2 Speakers | DTS Virtual:X | Sound Type : Down Firing", "Smart TV Features: Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking | Office 365, Set WXHXD (with Stand ) mm - 739 x 472 x 168", "Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED", "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase", "Installation : For requesting installation/wall mounting/demo of this product once delivered, please directly call LG support (Please visit LG Website for Toll Free Numebrs) and provide product's model name as well as seller's details mentioned on the invoice"]
  const [data, setData] = useState([]);
  const [fillteredData,setfillteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {

    const API = 'http://localhost:5000/product/get-all-products'

    await axios.get(API)
      .then((res) => {
        console.log(res.data.result)
        setData(res.data.result)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getData();
  }, [])


  React.useEffect(()=>{
    if(Categ !=='All'){
      const fillteredArry = data.filter(item => item.category === Categ);
      console.log(fillteredArry)
      setfillteredData(fillteredArry)
    }
  },[Categ])

  return (
    <>
      {
        user.loginStatus?
        loading ? <h1 style={{color:"#fff", textAlign:"center", minHeight:"80vh" }} >Loading ...</h1>
          :
          <div className="analytics">
            <div className="heading">
              <div>

                <h2>Hi! User &#128075;</h2>
                <p>Choose from handpicked Bestseller categories</p>
              </div>
              <div className="Graph">
                <p>Most Selling Products on dominant Ecommerce</p>
                <Graph />
              </div>
            </div>
            <div className="mainsection">
              <div className="searchbar">
                <p>Search product here for comparison!</p>
                <input type="text" placeholder='Search' />
                {/* <i className="fa fa-search"></i> */}
              </div>
              <div className="categories">
                {categories.map((category) =>
                  <button onClick={() => setCateg(category)} >
                    {category}
                  </button>
                )}

                <p>Current Category: <span> {Categ}</span></p>
              </div>
              
              {
               
               (Categ == "All") ? 
              
              data?.map((item,index)=>{
                const str = item.product_details;
                const withoutBrackets = str.substring(1, str.length - 1);
                // Remove double quotes and replace commas with </br>
                const formattedStr = withoutBrackets.replace(/"/g, '').replace(/,/g, ' </br>');

                return(
                  <div className="productdetail" key={index}>
                  <h2>{item?.name}</h2>
                  <h4>Comapany: {item?.company}</h4>
                  <p>Product Detail</p>
                  <p>{item?.product_description}</p>
                  <div dangerouslySetInnerHTML={{ __html: formattedStr }} />
                  <div className="price">
                    <h2>Price on Amazon: {item?.amazonPrice}</h2>
                    <h2>Price on Flipcart: {item?.filpkartPrice}</h2>
                    <p>Current Price Difference : {item?.amazonPrice - item?.filpkartPrice}</p>
                  </div>
                  <div className="Analytics">
                    <p>Performance based on Review</p>
                    <ProductRadar />
                  </div>
                </div>
                )
              })
              
              :
              ( !fillteredData?.length) ? <h1 style={{color:"#fff", textAlign:"center", minHeight:"80vh" }}>No Data Availble</h1>
               :

              fillteredData.map((item,index)=>{
                const str = item.product_details;
                const withoutBrackets = str.substring(1, str.length - 1);
                // Remove double quotes and replace commas with </br>
                const formattedStr = withoutBrackets.replace(/"/g, '').replace(/,/g, ' </br>');

                return(
                  
                <div className="productdetail" key={index}>
                <h2>{item?.name}</h2>
                <h4>Comapany: {item?.company}</h4>
                <p>Product Detail</p>
                <p>{item?.product_description}</p>
                <div dangerouslySetInnerHTML={{ __html: formattedStr }} />
                <div className="price">
                  <h2>Price on Amazon: {item?.amazonPrice}</h2>
                  <h2>Price on Flipcart: {item?.filpkartPrice}</h2>
                  <p>Current Price Difference : {item?.amazonPrice - item?.filpkartPrice}</p>
                </div>
                <div className="Analytics">
                  <p>Performance based on Review</p>
                  <ProductRadar />
                </div>
              </div>
                )
              })


            
            }
            </div>
          </div>
      :<h1 style={{color:"#fff", textAlign:"center", minHeight:"80vh" }}>Login First</h1>  
    }
    </>
  )
}

export default Scrape