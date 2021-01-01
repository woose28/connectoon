import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    const service_name = "CONNECTOON";
    const service_introduction = "인스타툰의 작가들을 한눈에 알아보세요!"
    
    return(
        <div className="header-container">
            <div className="header-first-line">
                <Link className="header-link" to="/">
                    <div className="header-service-name">
                        {service_name}
                    </div>
                </Link>
                <Link className="header-link" to="/register">
                    <div className="header-service-enrollment">
                        등록하기                
                    </div>
                </Link>
            </div>
            <div className="header-service-introduction">
                {service_introduction}
            </div>
        </div>
    )
}

export default Header;
