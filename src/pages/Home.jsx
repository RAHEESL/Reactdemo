import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import image from '../assets/OIP.jpg'

const Home = () => {
    return (
        <>
            <div class="nav">
                <div class="image">
                    <img src={image} />
                </div>
                <div className="aa">Spotify</div>
                <div class="a">Premium</div>
                <div class="b">Help</div>
                <div class="c">Download</div>
                <div class="d">|</div>
                <Link to={"/register"} >
                    <div class="e">Sign up</div>
                </Link>
                <Link to={"/login"} >
                    <div class="f">Login</div>
                </Link>
            </div>
        </>

    )
}

export default Home