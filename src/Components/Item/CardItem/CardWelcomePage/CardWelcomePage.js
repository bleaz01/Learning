import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Button from '../../Button/Button';


import './CardWelcomePageStyleSheet.scss'
const CardWelcomePage = ({icon, text, title,img, _onclick, rowStyle}) =>{

    
   
    return (
        <div className={ rowStyle ? 'Card-content-row':'Card-content'}>
            
            <div className= {rowStyle? 'Card-icon-row':'Card-icon'}>
              <i class={icon} ></i>
            </div>
            <div className={rowStyle? 'Card-text-row':'Card-text'}>
                <h3 className={rowStyle ?'title-card-row': "title-card"}>
                    {title}
                </h3>
                {rowStyle 
                ? null
                :<p className="text-card">
                    {text}
                </p>
                }
            </div>
            {rowStyle ? null :<div className='Card-button'>
              <Button buttonStyles="color-base " onclick={_onclick}>Ja</Button> 
            </div> } 
        </div>
    )
}

export default CardWelcomePage;