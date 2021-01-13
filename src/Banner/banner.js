import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon_svg from '../assets/img/icon.svg'
import Banner_img_svg from '../assets/img/banner_img.svg';

const Container = styled.div`
    width: 100%;
    height: 589px;
    background: #5759FF 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    flex-direction: row;
    position: relative;

    @media (max-width: 1200px) {
        width: 1200px
    }
`;


const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const Column = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left };
    right: ${props => props.right};
    bottom: ${props => props.bottom};

    
    @media (max-width: 1200px) {
        left: ${props => props.isFirst? "110px": "auto"};
        right: ${props => props.isFirst?  "auto": "90px"}
    }

    /*
    @media (max-width: 950px){
        top: ${props => props.isFirst? "16.1544%": "auto"};
    }
    */
`;

const Icon = styled.img`
    width: 83px;
    height: 83px;

    animation: ${fadeIn};
    animation-duration: 2s;
`;

const TxtContainer = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: ${props => props.marginTop};
    font: ${props => props.font};
    white-space: pre-wrap;
    color: #ffffff;
    
    animation: ${fadeIn};
    animation-duration: 2s;
`;
const TxtInsta = styled.div`
    display: inline-block;
    color: #5FD396;
    font: normal normal bold 42px/60px Noto Sans CJK KR;
    white-space: pre-wrap
`;

const BannerImg = styled.img`
    width: 450px;
    height: 483px;
    
    animation: ${fadeIn};
    animation-duration: 2s;
`;

const Banner = () => {
    return (
        <Container>
            <Column isFirst={true} top={"95.15px"} bottom={undefined} left={undefined} right={"57.5vw"}>
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
            <Column isFirst={false} top={undefined} bottom={"0px"} left={"55.15vw"} right={undefined}>
                <BannerImg src={Banner_img_svg} alt="banner_img"/>
            </Column>
        </Container>
    )
}

export default Banner;
