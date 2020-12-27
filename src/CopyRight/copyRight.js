import React from 'react';
import './copyRight.css';

const CopyRight = () => {
    const service_copyRight = "Copyrightⓒ 2020 sellstory. Inc All Rights Reserved";
    const service_warning = "Connectoon은 작가와 광고주를 연결해주는 플랫폼으로써 광고, 판매 등에 대한 책임을 지지 않습니다.";

    return(
        <div className="copyRight-container">
            <div className="copyRight-service-copyRight">
                {service_copyRight}
            </div>
            <div className="copyRight-service-warning">
                {service_warning}
            </div>
        </div>
    );
}

export default CopyRight;


