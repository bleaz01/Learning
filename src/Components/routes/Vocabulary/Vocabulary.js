// @ts-nocheck

import React,{useEffect,useState} from 'react';
import {  BrowserRouter as Router,
    useLocation,
    useRouteMatch,
    } from "react-router-dom";


//component
import GetItem from '../../layout/GetItem'

//style
import './VocabularyStyleSheet.scss'
import SelectModal from '../../Modals/SelectModal/SelectModal';


const Vocabulary = ()=>{

    let {path,url} = useRouteMatch()
    let name = useLocation()
    let slug = name.pathname.split("/")[2]


    return (
        <div className='Voc-container'>
            <div className='Voc-header'>
                <SelectModal/>
            </div>
            <div className='Voc-body'>
                <GetItem name={slug} />
            </div>
        </div>
    )
}

export default Vocabulary