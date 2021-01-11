import React from 'react'
import SelectModal from '../../Modals/SelectModal/SelectModal'



const Home=()=>{
const data=[
    {title:"lundi"},
    {title:"mardi"},
    {title:"mercredi"},
    {title:"jeudi"},
    {title:"vendredi"},
    {title:"samedi"},
]
    return(
       <div>
          <SelectModal
            item={data}
          />
       </div> 
       
    )
}

export default Home