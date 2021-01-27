import React, { useState } from "react"
import LoginForm from "../../Forms/LoginForm/LoginForm"
import RegisterForm from "../../Forms/RegisterForm/RegisterForm"
import Button from "../../Item/Button/Button"
import ModalBase from "../../Modals/Modal/ModalBase"

import "./LoggoudScreenStyleSheet.scss"

const LoggoudScreen =()=>{

    const [modalRegisterIsOpen,setRegisterIsOpen] = useState(false);
    const [modalLoginIsOpen,setLoginIsOpen] = useState(false);


    const openRegisterModal = () =>{
        setRegisterIsOpen(true);
        
    }
    const openLoginModal =()=>{
        setLoginIsOpen(true)

    }

    const closeRegisterModal = () =>{
        setRegisterIsOpen(false);
    }

    const closeLoginModal =()=>{
        setLoginIsOpen(false)
    }

   

    return(
     
        <div className="LoggoudScreen-Container">

            
            <Button buttonSize={"small"} onclick={openRegisterModal}> Register </Button> 
            <Button buttonSize={"small"} onclick={openLoginModal}> Login</Button> 





                              {/* <-----Modal-Screen------> */}


            <ModalBase closeModal={closeLoginModal} modalIsOpen={modalLoginIsOpen}>
                <LoginForm/>
            </ModalBase>
            
            <ModalBase closeModal={closeRegisterModal} modalIsOpen={modalRegisterIsOpen}>
                <RegisterForm/>
            </ModalBase>
        </div>
      
    )

}

export default LoggoudScreen