import React, { useState } from 'react';
import Writer from './writer';
import './writers.css';


const Writers = () => {
    const [ lencol, setLencol ] = useState(5);

    const data = [
        {
            id: 0,
            name: "joo_01102",
            link: "https://www.instagram.com/woose28/",
            follower: 1000,
        },
        {
            id: 1,
            name: "test_01",
            link: "https://www.instagram.com/woose28/",
            follower: 235460,
        },
        {
            id: 2,
            name: "apple1110",
            link: "https://www.instagram.com/woose28/",
            follower: 986,
        },
        {
            id: 3,
            name: "orange0939",
            link: "https://www.instagram.com/woose28/",
            follower: 632100,
        },
        {
            id: 4,
            name: "melon75e43",
            link: "https://www.instagram.com/woose28/",
            follower: 353,
        },
        {
            id: 5,
            name: "likebear",
            link: "https://www.instagram.com/woose28/",
            follower: 43532,
        },
        {
            id: 6,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 7,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 8,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 9,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 10,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 11,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 12,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 13,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 14,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 15,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
        {
            id: 16,
            name: "sweet",
            link: "https://www.instagram.com/woose28/",
            follower: 123,
        },
    ];

    const data_split = () => {
        let data_arr = []
        const final_row = parseInt(data.length / lencol, 10) + 1;

        for(var i = 0; i < final_row; i++){
            data_arr = data_arr.concat({
                id: "row_"+i,
                data: data.slice(i*lencol, (i+1)*lencol)});
        }
        
        return data_arr
    }

    return(
        <div className="writers-container">
            <table className="writers-table">
                <tbody>
                    {data_split().map( (row) => {
                        return(<tr key={row.id}>{row.data.map(
                            (col) => {
                                return(<td key={col.id}><Writer writer_name={col.name} writer_link={col.link} writer_follower={col.follower}/></td>)
                            }
                        )}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Writers;