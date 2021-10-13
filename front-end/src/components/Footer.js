import React from 'react'
import {Link} from 'react-router-dom';
import { FaAngleDoubleUp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../index.css'

const Footer = () => {
    const topFunction = () => {
        window.scroll({top:0,behavior:'smooth'})
    }
    return (
        <footer>
            <address>
                Written by Giannis Vitalis.<br></br>
                Socials:
                <Link to="https://www.facebook.com/" style={{ color:'white', cursor:'pointer', marginLeft:5}}><FaFacebook /></Link>
                <Link to="https://www.twitter.com" style={{ color:'white', cursor:'pointer', marginLeft:5}}><FaTwitter /></Link>
                <Link to="https://www.instagram.com" style={{ color:'white', cursor:'pointer', marginLeft:5}}><FaInstagram /></Link>
            </address>
            <button onClick={topFunction} id="go-top"><FaAngleDoubleUp /></button> 
    </footer>
    )
}

export default Footer
