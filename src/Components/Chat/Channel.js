import React from 'react'



const Channel=({data})=>{
    console.log(data)

   return(
    <div className='channel-item'>
        <div>{data.name}</div>
        <span>{data.participants}</span>

    </div>
   )
}

export default Channel