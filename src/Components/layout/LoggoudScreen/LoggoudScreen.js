import React, { useState } from "react"
import RegisterForm from "../../Forms/RegisterForm/RegisterForm"
import Button from "../../Item/Button/Button"
import ModalBase from "../../Modals/Modal/ModalBase"

import "./LoggoudScreenStyleSheet.scss"

const LoggoudScreen =()=>{

    const [modalIsOpen,setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true);
        
    }

    const closeModal = () =>{
        setIsOpen(false);
    }

    return(
     
        <div className="LoggoudScreen-Container">

            
            <Button buttonSize={"large"} onclick={openModal}> Register </Button> 

            
            <ModalBase closeModal={closeModal} modalIsOpen={modalIsOpen}>

                <RegisterForm/>
            </ModalBase>
        </div>
      
    )

}

export default LoggoudScreen