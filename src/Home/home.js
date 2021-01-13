import React from 'react';
import styled, { keyframes } from 'styled-components';
import './home.css';
import { connect } from 'react-redux';
import { load_info_before, requestLoad } from '../store/modules/load_info';

import Banner from '../Banner/banner';
import Search_icon_svg from '../assets/img/search_icon.svg';

//import Writers from '../Writer/writers';
import NewWriters from '../newWriter/newWriters';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const ContainerSearch = styled.div`
    width: 100%;
    margin-top: 109px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 1200px
    }

    animation: ${fadeIn};
    animation-duration: 2s;
`;

const SearchIcon = styled.img`
    width: 34px;
    height: 34px;
`;

const SearchTxtContainer = styled.div`
    text-align: left;
    font: normal normal 500 26px/32px Noto Sans CJK KR;
    letter-spacing: -1.3px;
    color: #050646;
`;

const TxtInsta = styled.span`
    color: #050646;
`;

const Home = (props) => {
    const loadData = () => {
        props.requestLoad();
    }
    return(
        <div className="home-container">
            <Banner/>
            <ContainerSearch>
                <SearchIcon src={Search_icon_svg} alt="search_icon"/>
                <SearchTxtContainer>
                    <TxtInsta>인스타툰</TxtInsta>
                    의 작가들을 한눈에 알아보세요.
                </SearchTxtContainer>
            </ContainerSearch>
            <NewWriters
                idLoading={props.isLoading}
                isSuccess={props.isSuccess}
                loadData={loadData}
                userData={props.data}
                final_id={props.final_id}
            />
            {/*
                <Writers
                idLoading={props.isLoading}
                isSuccess={props.isSuccess}
                loadData={loadData}
                userData={props.data}
                final_id={props.final_id}
                />            
            */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.load_info.isLoading,
    isSuccess: state.load_info.isSuccess,
    data: state.load_info.info.data,
    length: state.load_info.info.length,
    final_id: state.load_info.info.final_id,
});

const mapDispatchToProps = (dispatch) => ({
    load_info_before: () => { dispatch(load_info_before()) },
    requestLoad: () => { dispatch(requestLoad()) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
