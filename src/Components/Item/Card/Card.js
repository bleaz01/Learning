import React,{useState} from 'react';

import './CardStyleSheet.scss'
const Card = (props) =>{

    const {cardHeader, imgCard, cardFooter, href} = props

    return (
        <div  className='Card-container'>
            <div className='Card-header'>
                {cardHeader}
            </div>
            <div className='Card-body'>
                <a href={href}>
                    <img src={imgCard} className='Card-img'/>
                </a>
            </div>
            <div className='Card-footer'>
                    {cardFooter}
            </div>  
        </div>
    )
}

export default Card;