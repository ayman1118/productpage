import React from 'react';
import './style.css'
const Productdetails=(props)=>{
    return(
        <ul className='divCard'>
            <li className='title'>{props.info.itemname}</li>
            <li>{props.info.price}₹.</li>
            <li className='descript'>{props.info.dese}</li>
        </ul>
            
    );
}
export default Productdetails;