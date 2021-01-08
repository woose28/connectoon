import React, { useState, useEffect } from 'react';
import Writer from './writer';
//import Select from '@material-ui/core/Select';
//import MenuItem from '@material-ui/core/MenuItem';

import './writers.css';



const Writers = (props) => {
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

    return(    
    <div className="writers-container">
        <select 
            className="writers-dropdown"
            onChange={select_sorting}
            defaultValue={kind_sort}        
        >
            <option value="registration">등록순</option>
            <option value="follower">팔로워순</option>
            <option value="name">이름순</option>
        </select>
        <div className="writers-table">
            {data_split(userData).map( (row) => {
                return(<div className="writers-row" key={row.id}>{row.data.map(
                    (col, idx) => {
                        return(
                        <div className={"writers-td"} key={col.id}>
                            <div className="writers-td-inner">
                                <Writer writer_name={col.username} writer_link={col.link} writer_follower={col.followers} writer_img={col.img}/>
                            </div>
                        </div>)
                    }
                )}</div>)
            })}
        </div>
    </div>
        
    );
}

export default Writers;