import React from 'react';
import './writer.css';

const Writer = (props) => {
    
    const addComma = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 

    return(
        <div className="writer-container">
            <a className="writer-link" href={props.writer_link} target="_blank" rel="noreferrer">
                <div className="writer-image-container">
                    <img className="writer-image"src={props.writer_img} alt="writer_image"/>
                    <div className="writer-image-overlay"></div>
                </div>
            </a>
            <a className="writer-link" href={props.writer_link} target="_blank" rel="noreferrer">
                <div className="writer-name">
                    {props.writer_name}
                </div>
            </a>
            <div className="writer-follower">
                팔로우 {addComma(props.writer_follower)}명
            </div>
        </div>
    )
}

export default Writer;
