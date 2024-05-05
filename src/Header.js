import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    function TopLink() {
        window.scrollTo(0, 0);
    }
    return (
        <header>
            <Link className='link' onClick={TopLink} to={'/'}>
                <h3>Home</h3> 
            </Link>
        </header>
    );
};

export default Header;