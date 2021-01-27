import React,{useState} from 'react'

//Style
import './CardVerbsStyleSheet.scss';


const CardVerbs = ({items,title}) =>{

    const [cardTitle, setCardtitle] = useState('')

    const sub = ['ik',' jij/u/je,','hij/zij/het',' wij (we)',' julli',' zij (ze)']

    const changeTitleTime =(index)=>{

        switch(index){
            case 'ott':
                setCardtitle("onvoltooid tegenwoordige tijd (ott)")
            break;
            case'vtt':
                setCardtitle( "voltooid tegenwoordige tijd (vtt)")
            break
        }
    }
    let i = 0
   
    const data = items.map((item) =>{
        return(
            <div className='CardVerbs-list'>  
                <div className='sub'>
                    {sub[i++]}
                </div> 
                <div className='verb'>
                    {item}
                </div>
            </div>
            
        )
        
    })


    return(
        <div className='CardVerbs-container'>
            <div className='CardVerbs-header'>
                <h5> </h5>
            </div>
           
            <div className='CardVerbs-content'>
                    {data}
            </div>
        </div>
    )
}

export default CardVerbs;