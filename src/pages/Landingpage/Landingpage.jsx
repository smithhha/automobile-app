import React from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Registration/Register'
import './Landingpage.css';

export const Landingpage = () => {

    return (
        <div className='landing-page-wrapper'>
            <div className="image-container">
                <img src="loginimg.jpg" alt="compnay logo" />
            </div>
            <div className="register-or-login-component">
            {window.location.href.includes("/login") ? <Login/> : <Register/>}
            </div>
        </div>
    )
}
