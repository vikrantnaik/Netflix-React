import React from 'react'
import './Nav.css'

const nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png" alt="logo" />
            </div>
            <div className="btn">
                <button id="btn__signup">Sign Up</button>
                <button id="btn__login">Log In</button>
            </div>
        </div>
    )
}

export default nav