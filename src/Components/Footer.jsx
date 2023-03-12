import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div>
            <h4>Comparix</h4>
            <p>Web scrapping company <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo natus expedita?</p>
          </div>
          <div className="input">
            Subscribe newsletter
            <input type="text" placeholder='email' />
          </div>
        </div>
      </div>
      <br />
      {/* <div className="list">

      </div> */}
      <div className="bottom">
        All rights reserved by Comparix 2022
      </div>
    </div>
  )
}

export default Footer