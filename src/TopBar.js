import React from 'react'
import './App'
import { Link } from "react-router-dom";
import CustomLink from './Routing';
import { ReactComponent as Twitter } from './icons/twitter.svg';
import { ReactComponent as Temp } from './icons/dummy.svg';
import { ReactComponent as Gift } from './icons/gift.svg';
import { ReactComponent as Contact } from './icons/contact.svg';
import { ReactComponent as Logo1 } from './icons/logo1.svg';

export default function TopBar() {
    return (
        <nav className='nav'>
            <Link to='/' className='logo'><Logo1 /></Link>
            <ul>
                <CustomLink to="/TA" style={{ color: 'lightblue' }}><span className='icon-button'><Twitter /></span>Tweet Analyzer</CustomLink>
                <CustomLink to="/extra"><span className='icon-button'><Temp /></span>Extra</CustomLink>
                <CustomLink to="/gift" style={{ color: 'red' }}><span className='icon-button'><Gift style={{ fill: "red", backgroundColor: "white" }} /></span>Gift</CustomLink>
                <CustomLink to="/contact"><span className='icon-button'><Contact /></span>Contact</CustomLink>
            </ul>
        </nav>
    )
}
