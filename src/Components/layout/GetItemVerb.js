import React,{useEffect,useState} from 'react';
import useAxios from 'axios-hooks'
import CardVerbs from '../Item/CardItem/CardVerbs/CardVerbs';
    
const GetItemVerbs =({name})=>{
    console.log(name)

    // const[selectVerb, setSelectVerb]= useState('');
    const [{ data }] = useAxios(
        `http://localhost:3000/api/verbs/${name}`
    )
    
    const verbum = []
    const title=[]
    if(data) {
        data.map((item) => {
            for (const [key, value] of Object.entries(item)) {
                verbum.push(value)
                title.push(key)
            }

        })
    }
   

    return(
        <>
            {verbum && verbum.map((l)=>{
                return(
                    
                    <CardVerbs
                        items={l}
                        title={title}
                    />
                )
            })}
        </>
    )
   
}
export default GetItemVerbs