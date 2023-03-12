import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../provider/Auth'

const Navbar = () => {
    const {user,updateUser} = useContext(UserContext)
    return (
        <div className="navbar">
            <div className="nav">
                <div className="left">
                    <Link className="hover-underline-animation" to="/" >Home</Link>
                    <Link className="hover-underline-animation" to="scrape" >Analytics</Link>
                    <Link className="hover-underline-animation" to="about" >About Us</Link>
                    <Link className="hover-underline-animation" to="Feedback" >FeedBack</Link>
                </div>
                <div className="right">
                {  user.loginStatus?
                    <Link to="/" >
                    <button onClick={()=>updateUser({loginStatus:false, data: [] })} >
                    <i className="fa-solid fa-right-to-bracket"></i>
                        Logout
                    </button>
                </Link>
                :
                <Link to="/login" >
                    <button >
                    <i className="fa-solid fa-right-to-bracket"></i>
                        Login
                    </button>
                </Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar