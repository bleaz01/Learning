// @ts-nocheck

import React,{useEffect,useState} from 'react';
import useAxios from 'axios-hooks'



//component
import Card from '../../Item/Card/Card';

import img from '../../../assets/houseTheme.jpg'
import './VocabularyStyleSheet.scss'


const Vocabulary = ()=>{

    const [listData, setListData ] = useState();
    const [activity, setActivity] = useState()

   
    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:3000/api/vocabulary/1'
        )
    
    useEffect(()=>{

        setListData(data);
        // setActivity( Object.keys(data));
           
    })
    
   

    // const listActivity = listData.house.map((activity) =>{
    //     return (
    //         <Card
    //             cardHeader={activity}
    //             imgCard={img}
    //             cardFooter='check'
    //         />
    //    )
    // });
    return (
        <div className='Voc-container'>
            <div className='Voc-header'>
            {data && Object.keys(data).map((activity)=>{
                return (
                    <Card
                        cardHeader={activity}
                        imgCard={img}
                        cardFooter='check'
                    />
               )
             })}
            </div>
            <div className='Voc-body'>
                {/* <pre>{listData}</pre> */}

            </div>
        </div>
    )
}

export default Vocabulary