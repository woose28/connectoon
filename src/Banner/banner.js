import React from 'react';
import styled from 'styled-components';
import Icon_svg from '../assets/img/icon.svg'
import Banner_img_svg from '../assets/img/banner_img.svg';

const Container = styled.div`
    width: 1920px;
    height: 589px;
    background: #5759FF 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    flex-direction: row;
    position: relative;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`;

const Icon = styled.img`
    width: 83px;
    height: 83px;
`;

const TxtContainer = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: ${props => props.marginTop};
    font: ${props => props.font};
    white-space: pre-wrap;
    color: #ffffff;
`;
const TxtInsta = styled.div`
    display: inline-block;
    color: #5FD396;
    font: normal normal bold 42px/60px Noto Sans CJK KR;
    white-space: pre-wrap
`;

const BannerImg = styled.img`

`;

const Banner = () => {
    return (
        <Container>
            <Column top={"95.15px"} left={"380px"}>
                <Icon src={Icon_svg} alt="icon"/>
                <TxtContainer 
                    width={"400px"} height={"182px"} marginTop={"23.31px"} 
                    font={"normal normal bold 42px/60px Noto Sans CJK KR"}>
                    <TxtInsta>{"인스타들\n"}</TxtInsta>
                    {"의\n작가들을\n한눈에 알아보세요."}
                </TxtContainer>
                <TxtContainer 
                    width={"350px"} height={"78px"} marginTop={"33px"} 
                    font={"normal normal 500 26px/40px Noto Sans CJK KR"}>
                    {"나에게 딱 맞는 인스타툰 작가를\n빠르고 쉽게 찾을 수 있습니다."}
                </TxtContainer>
            </Column>
            <Column top={"105.8px"} left={"1058.09px"}>
                <BannerImg src={Banner_img_svg} alt="banner_img"/>
            </Column>
        </Container>
    )
}

export default Banner;
