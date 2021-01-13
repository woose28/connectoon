import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/component/logo';
import './footer.css';

const Container = styled.div`
    width: 100%;
    height: 300px;
    border-top: 1px solid #DFDFDF; 
    margin-top: 120px;
    
    @media (max-width: 1200px){
        width: 1200px;
    }
`;

const Column = styled.div`
    width: 810px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20.93%;
`;

const TxtContainer = styled.div`
    white-space: pre-wrap;
    margin-top: 39px;
    font: normal normal 500 12px/30px Noto Sans CJK KR;
    color: #aaaaaa;
`;

const Footer = () => {
    const service_basicInfo = "CEO: 김주영ㅣ 셀스토리주식회사 | 사업자등록번호: 471-88-01548ㅣ 사업장주소: 경기도 평택시 청북읍 토진 2길 82";
    const service_contact = "E-mail: support@sellstory.co.kr";
    const service_copyRight = "Copyrightⓒ 2020 sellstory. Inc All Rights Reserved";
    const service_warning = "Connectoon은 작가와 광고주를 연결해주는 플랫폼으로써 광고, 판매 등에 대한 책임을 지지 않습니다.";

    return(
        <Container>
            <Column>
                <Logo c_color={"#aaaaaa"} d_color={"#aaaaaa"}/>
                <TxtContainer>
                    {service_basicInfo+"\n"+service_contact}
                </TxtContainer>
                <TxtContainer>
                    {service_copyRight+"\n"+service_warning}
                </TxtContainer>
            </Column>
        </Container>
    );
}

export default Footer;


