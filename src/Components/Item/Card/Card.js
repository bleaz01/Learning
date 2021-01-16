import React,{useState} from 'react';
import {useParams} from 'react-router-dom';

import './CardStyleSheet.scss'
const Card = ({cardHeader, imgCard, cardFooter, href ,onclick}) =>{

    
   
    return (
        <div onClick={onclick} className='Card-container'>
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