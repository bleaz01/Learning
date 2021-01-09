
   
import React,{useEffect,useState} from 'react';
import useAxios from 'axios-hooks'
import CardVocItem from '../Item/CardItem/CardVocItem/CardVocItem'
    
const GetItem =({name})=>{

    console.log(name)

    const [{ data }] = useAxios(
        `http://localhost:3000/api/vocabulary/${name}`
    )

    return(
        <>
            {data && data.map((l)=>{
                return(
                    <CardVocItem
                        img={l.img}
                        title={l.title}
                    />
                )
            })}
        </>
    )
   
}
export default GetItem