import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import NewWriter from './newWriter';
import Arrow_svg from '../assets/img/arrow.svg';

const Container = styled.div`
    width: 1116px;
    display: flex;
    flex-direction: column;
    margin-top: 41px;
    align-self: center;
`;

const Dropdown = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
    width: 64.31px;
    align-self: flex-end;
    border: none;
    background: url(${Arrow_svg}) 95% 50% no-repeat;

    &::-ms-expand {
        display: none;
    }
`;

const Option = styled.option`
    background-color: rgba(170, 170, 170, 100);
    font: normal normal 500 18px/13px Noto Sans CJK KR;
    letter-spacing: -0.9px;
    color: #1E1E1E;
    opacity: 1;
`;

const WritersTable = styled.div`
    width: 100%;
    margin-top: 44px;
`;

const WritersRow = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
`;

const WritersTd = styled.div`
    width: 350px;
    margin-left: ${props => props.isCenter? "33px": "0px"};
    margin-right: ${props => props.isCenter? "33px": "0px"};
`;

const NewWriters = (props) => {
    useEffect(()=>{
        props.loadData();
    }, []);
    
    const [ lencol ] = useState(3);
    const [ kind_sort, setKindSort ] = useState("registration")
    const userData = props.userData;

    const data_split = (data) => {
        let data_arr = []

        let final_row = 0
        if(data.length % lencol === 0){
            final_row = parseInt(data.length / lencol, 10)
        }
        else{
            final_row = parseInt(data.length / lencol, 10) + 1;
        }
        
        for(var i = 0; i < final_row; i++){
            data_arr = data_arr.concat({
                id: "row_"+i,
                data: data.slice(i*lencol, (i+1)*lencol)});
        }
        
        return data_arr
    }

    const select_sorting = (e) => {
        setKindSort(e.target.value);
        sort_data(e.target.value);
    }

    const sort_data = (sort_method) => {
        if(sort_method === "registration"){
            sort_by_registration();
        }
        else if(sort_method === "follower"){
            sort_by_follower();
        }
        else{
            sort_by_name();
        }
    }

    const sort_by_registration = () => {
        userData.sort(function(a, b) {
            return a.id - b.id;
        })
    }

    const sort_by_follower = () => {
        userData.sort(function(a, b){
            return (a.followers - b.followers)*-1;
        })
    }

    const sort_by_name = () => {
        userData.sort(function(a, b){
            const upperCaseA = a.username.toUpperCase();
            const upperCaseB = b.username.toUpperCase();

            let res = 0

            if(upperCaseA > upperCaseB) res = 1;
            else if(upperCaseA < upperCaseB) res = -1;
            return res;
        })
    }

    return (
        <Container>
            <Dropdown
                onChange={select_sorting}
                defaultValue={kind_sort}
                background_url={Arrow_svg}
                >
                <Option value="registration">등록순</Option>
                <Option value="follower">팔로워순</Option>
                <Option value="name">이름순</Option>
            </Dropdown>
            <WritersTable>
                {data_split(userData).map( (row) => {
                    return(<WritersRow key={row.id}>{row.data.map(
                        (col, idx) => {
                            return(
                            <WritersTd key={col.id} isCenter={idx === 1? true: false}>
                                    <NewWriter writer_name={col.username} writer_link={col.link} writer_follower={col.followers} writer_img={col.img}/>
                            </WritersTd>)
                        }
                    )}</WritersRow>)
                })}
            </WritersTable>
        </Container>
    );
}

export default NewWriters;
