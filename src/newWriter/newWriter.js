import React from 'react';
import styled from 'styled-components';
import Follower_svg from '../assets/img/follower_icon.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    text-decoration: none;
`;

const WriterLink = styled.a`
    width: fit-content;
    height: fit-content;
    text-decoration: none;
`;

const ImgOverlay = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #3b3b3b;
    transition: all 0.3s ease;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    max-height: 350px;
    box-shadow: 5px 5px 5px -5px #aaaaaa, -5px 5px 5px -5px #aaaaaa;

    &:hover ${ImgOverlay} {
        opacity: 0.5;
    }
`;

const WriterImg = styled.img`
    width: 100%;
    height: 350px;
    max-height: 100%;
    object-fit: contain;
`;

const WriterName = styled.div`
    width: fit-content;
    font: normal normal 500 16px Noto Sans CJK KR; 
    color: #000000;
    text-decoration: none;
    margin-top: 12px;
`;

const FollowerContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    align-items: center;
`;

const FollowerIcon = styled.img`
    width: 17px;
    height: 17px;
`;

const WriterFollower = styled.div`
    width: fit-content;
    font: normal normal 500 16px Noto Sans CJK KR; 
    color: #5FD396;
    text-decoration: none;
    margin-left: 4px;
`;

const NewWriter = (props) => {
    const addComma = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
    
    return (
        <Container>
            <WriterLink href={props.writer_link} target="_blank" rel="noreferrer">
                <ImgContainer>
                    <WriterImg src={props.writer_img} alt="write_img"/>
                    <ImgOverlay/>
                </ImgContainer>
            </WriterLink>
            <WriterLink href={props.writer_link} target="_blank" rel="noreferrer">
                <WriterName>{props.writer_name}</WriterName>
            </WriterLink>
            <FollowerContainer>
                <FollowerIcon src={Follower_svg}/>
                <WriterFollower>
                    팔로워 {addComma(props.writer_follower)}명
                </WriterFollower>    
            </FollowerContainer>
        </Container>
    )
}

export default NewWriter;
