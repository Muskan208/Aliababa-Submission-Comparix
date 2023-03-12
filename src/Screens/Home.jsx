import React from 'react'
import people from '../asset/people.png'
const Home = () => {
  return (
    <div className='homesection' >
        <div className="left">
          <h1>Comparix</h1>
          <h2>Lorem ipsum dolor sit.</h2>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iure excepturi saepe blanditiis facilis accusantium, reprehenderit perspiciatis delectus, suscipit incidunt nam architecto aliquam a possimus aperiam sapiente soluta tenetur asperiores ratione animi repudiandae earum? Corporis veritatis consectetur optio! Dicta, ad?</p>
          <br />
          <button>
            See More
          </button>
        </div>
        <div className="right">
          <img src={people} alt="" />
        </div>

    </div>
  )
}

export default Home