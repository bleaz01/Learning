// @ts-nocheck

import React,{useEffect,useState} from 'react';
import useAxios from 'axios-hooks'
import { useParams } from "react-router-dom";
import img from './assets/ski.png'


//component
import Card from '../../Item/Card/Card';

import './VocabularyStyleSheet.scss'
import CardVocItem from '../../Item/CardItem/CardVocItem/CardVocItem'


const Vocabulary = ()=>{

    const [getVocabulary, setGetVocabulary] = useState('')
    const [getName, setGetName] = useState('')

    // const [{ data, loading, error }, refetch] = useAxios(
    //     'http://localhost:3000/api/vocabulary/getName'
    //     )
    // // let {url} = useParams()

    let url = 'activity'

    
   
        const [{ data }] = useAxios(
            `http://localhost:3000/api/vocabulary/${url}`
            )

   
      
    return (
        <div className='Voc-container'>
            <div className='Voc-header'>
            {/* {data && Object.keys(data).map((activity)=>{
                return (
                    <Card
                        cardHeader={activity}
                        imgCard={img}
                        cardFooter='check'
                        href={'/'+activity}
                    />
               )
            })} */}
            </div>
            <div className='Voc-body'>
               {data && data.map((l)=>{
                    console.log(l.img)
                    return(
                        <CardVocItem
                        img={img}
                        title={l.title}
                        />
                    )
                   
                })
               
               }
                
                {/* <a onClick={x()} style={{border: '2px' , borderStyle:'solid', margin:'10px', marginTop:'5px'}}>
                    bouton
                </a> */}
            </div>
        </div>
    )
}

export default Vocabulary