import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <nav>

        <Link to='/'>Home</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>


        {/* <a href="/">Home</a>
        <a href="/friends">Friends</a>
        <a href="/posts">Posts</a>
        <a href="/about">About</a>
        <a href="/contact">contact</a> */}
       </nav>


    );
};

export default Header;