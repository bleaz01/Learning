// @ts-nocheck

import React,{useEffect,useState} from 'react';
import useAxios from 'axios-hooks'
import {  BrowserRouter as Router,
    useLocation,
    useRouteMatch,
    } from "react-router-dom";

import img from '../../../assets/houseTheme.jpg'

//component
import Card from '../../Item/Card/Card'
import GetItem from '../../layout/GetItem'

//style
import './VocabularyStyleSheet.scss'


const Vocabulary = ()=>{

    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:3000/api/vocabulary/getName'
        )

    let {path,url} = useRouteMatch()
    let name = useLocation()
    let slug = name.pathname.split("/")[2]

    return (
        <div className='Voc-container'>
            <div className='Voc-header'>
                {data && Object.keys(data).map((activity)=>{
                    return ( 
                        <Card
                            cardHeader={activity}
                            imgCard={img}
                            cardFooter='check'
                            href={`${url}/${activity}`}  
                        />       
                    )
                })}    
            </div>
            <div className='Voc-body'>
                <GetItem name={slug} />
            </div>
        </div>
    )
}

export default Vocabulary