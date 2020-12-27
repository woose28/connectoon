import React from 'react';
import './footer.css';

const Footer = () => {
    const service_name = "CONNECTOON";
    const service_basicInfo = "CEO: 김주영ㅣ 셀스토리주식회사 | 사업자등록번호: 471-88-01548ㅣ";
    const service_address = "사업장주소: 경기도 평택시 청북읍 토진 2길 92";
    const service_contact = "E-mail: support@sellstory.co.kr";

    return(
        <div className="footer-container">
            <div className="footer-service-name">
                {service_name}   
            </div>
            <div className="footer-service-info">
                {service_basicInfo}
            </div>
            <div className="footer-service-info">
                {service_address}
            </div>
            <div className="footer-service-info">
                {service_contact}
            </div>
        </div>
    );
}

export default Footer;


