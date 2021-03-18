import React, { useState } from "react"
import useAxios from 'axios-hooks'

import { signIn, signOut, useSession } from 'next-auth/client'

import LoginForm from "../../Forms/LoginForm/LoginForm"
import RegisterForm from "../../Forms/RegisterForm/RegisterForm"
import Button from "../../Item/Button/Button"
import ModalBase from "../../Modals/Modal/ModalBase"
import img from "../../../assets/Dialogue.png";

import "./WelcomePageStyleSheet.scss"
import GoogleBtn from "../GoogleBtn"
import Listing from "../../Item/Listing/Listing"
import Login from "../../routes/Login/Login"




                            // Add after Welcome design down \\

//      <Button buttonSize={"small"} onclick={openRegisterModal}> Register </Button>  \\
//      <Button buttonSize={"small"} onclick={openLoginModal}> Login</Button>         \\

                            //           ---------             \\


const WelcomePage =()=>{

    const [modalRegisterIsOpen,setRegisterIsOpen] = useState(false);
    const [modalLoginIsOpen,setLoginIsOpen] = useState(false);

    
    const [session] = useSession()

    console.log(session)


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

   const section=[
       'one',
       'two',
       'three',
       'four'


   ]

    return(
     
        <div className="WelcomePage-Container">

            <div className="WelcomePage-Main">
                <div className={`section ${section[0]}`}>
                    <GoogleBtn/>

                </div>
                <div className={`section ${section[1]}`}>
                    <div>
                        <LoginForm/>
                     {/* //   <Login/> */}
                    </div>
                    <div>
                        <img className="img" src={img}  alt={img} />
                    </div>
                </div>
                <div className={`section ${section[2]}`}>
                        <Listing/>
                </div>
                <div className={`section ${section[3]}`}>
                        4
                </div>
                
            </div>

            
        



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

export default WelcomePage