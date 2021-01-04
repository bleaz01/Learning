import React from 'react';

import './CardVocItemStyleSheet.scss'

const CardVocItem = ({img, title})=>{
    return( 
        
        <div className="VocItem-container">
            <div className="VocItem-img">
                <img src={img}/> 
            </div>
            <div className="VocItem-title">
                {title}
            </div>
        </div>
       
        
    )
}

export default CardVocItem