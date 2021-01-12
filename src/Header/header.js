import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../assets/img/logo.svg'

const Header = () => {
    //const service_name = "CONNECTOON";
    //const service_introduction = "인스타툰의 작가들을 한눈에 알아보세요!"
    
    return(
        <div className="header-container">    
            <Link className="header-link" to="/">
                <img src={Logo} alt="logo"/>
            </Link>
        </div>
    )
}

export default Header;
