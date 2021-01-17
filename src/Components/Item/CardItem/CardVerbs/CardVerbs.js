import React from 'react'


import './CardVerbsStyleSheet.scss';

const CardVerbs = ({items}) =>{

    
   
    
    const sub = [
        {subject:'ik'},
        {subject: ' jij/u'},
        {subject:'je,'},
        {subject:'hij/zij/het'},
        {subject:' wij (we)'},
        {subject:' julli'},
        {subject:' zij (ze)'},
    ]

  

    const data = items.map((item =>{

        return(
            <div className='CardVerbs-list'>  
                <div className='sub'>
                
                </div> 
                <div className='verb'>
                    {item}
                </div>
            </div>
            
        )
   
    }))
    

    return(
        <div className='CardVerbs-container'>
            <div className='CardVerbs-header'>
                <h5> voltooid tegenwoordige tijd (vtt)</h5>
            </div>
           
            <div className='CardVerbs-content'>
                     {data} 
            </div>
        </div>
    )
}

export default CardVerbs;