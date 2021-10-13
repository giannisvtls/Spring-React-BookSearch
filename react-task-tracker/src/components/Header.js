import React from 'react'
import {Link} from 'react-router-dom';
import '../index.css'

const Header = () => {
    return(
        <header>
            <nav id='menuToggle'>
                <input type='checkbox'/>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id="menu">
                    <li>
                        <Link id="homePage" to="/">Home</Link>
                    </li>
                    <li>
                        <Link id="favorites" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
