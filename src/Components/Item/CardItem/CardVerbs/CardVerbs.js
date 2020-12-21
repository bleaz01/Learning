import React from 'react'


import './CardVerbsStyleSheet.scss';

const CardVerbs = () =>{

    const fakeVerb = [
        {subject:'ik', verb:'eet'},
        {subject: ' jij/u', verb:'eet'},
        {subject:'je', verb:'eet'},
        {subject:'hij/zij/het', verb:'eet'},
        {subject:' wij (we)', verb:'eten'},
        {subject:' julli', verb:'eten'},
        {subject:' zij (ze)', verb:'eten'},
    ]

    const data = fakeVerb.map((item =>{

        return(
            <div className='CardVerbs-list'>
                <div className='sub'>
                    {item.subject}
                </div>
                <div className='verb'>
                    {item.verb}
                </div>
            </div>
           
        )
       
    }))
    

    return(
        <div className='CardVerbs-container'>
            <div className='CardVerbs-header'>
                <h5> voltooid tegenwoordige tijd (vtt)</h5>
            </div>
            {/* <hr
             style={{
               color:"black", 
               width:'70%'
            }} */}
            {/* /> */}
            <div className='CardVerbs-content'>
                     {data} 
            </div>
        </div>
    )
}

export default CardVerbs;