import React,{useState} from 'react';
import useAxios from 'axios-hooks'
import {  BrowserRouter as Router,
    useLocation,
    useRouteMatch,
    useHistory
    } from "react-router-dom";


import img from '../../../assets/houseTheme.jpg'
import './SelectModalStyleSheet.scss'

//component
import Card from '../../Item/Card/Card'
import Button from '../../Item/Button/Button';
import ModalBase from '../Modal/ModalBase';



const SelectModal = ()=>{


    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:3000/api/vocabulary/getName'
    )
    const [modalIsOpen,setIsOpen] = useState(false);
    const [myActivity, setMyActivity] = useState();
    const [currentUrl,setCurentUrl] = useState('');

    const history = useHistory();

    let {path,url} = useRouteMatch()


    const openModal = () =>{
        setIsOpen(true);
        
    }

    const closeModal = () =>{
        setIsOpen(false);
    }

    const selectMyactivity =(item)=>{
        
        setMyActivity(item)
        setIsOpen(false);
        history.push(`${url}/${item}`);
       
    }
  
    return(
        <>
        {myActivity 
            ?
            <Card
            onclick={openModal}
            cardHeader={myActivity}
            imgCard={img}
            cardFooter='check'
            />      
            :
            <Button buttonSize={"large"} onclick={openModal}>select</Button> 
        }
        
        <ModalBase closeModal={closeModal} modalIsOpen={modalIsOpen}>

          <div className="SelectModal-container">
                {data && Object.keys(data).map((activity)=>{
                        console.log(Object.keys(data)[0]);
                    return ( 
                        <>
                        <Button buttonSize={"large"} onclick={()=>{selectMyactivity(activity)}}>
                            {activity}
                        </Button>
                          </>
                    )
                })}    
          </div>
      </ModalBase>
      </>
    )
}

export default SelectModal