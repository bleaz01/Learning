import React,{useState} from 'react';

import './CardStyleSheet.scss'
const Card = (props) =>{

    const {cardHeader, imgCard, cardFooter} = props

    return (
        <div className='Card-container'>
            <a href='#'>
                <div className='Card-header'>
                    {cardHeader}
                </div>
                <div className='Card-body'>
                    {/* <img src={imgCard} className='Card-img'/> */}
                </div>
                <div className='Card-footer'>
                        {cardFooter}
                </div> 
            </a> 
        </div>
    )
}

export default Card;