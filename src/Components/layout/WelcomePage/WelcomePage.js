import React, { useState } from "react"
import useAxios from 'axios-hooks'
import {useDispatch, useSelector} from "react-redux"



import LoginForm from "../../Forms/LoginForm/LoginForm"
import RegisterForm from "../../Forms/RegisterForm/RegisterForm"
import Button from "../../Item/Button/Button"
import ModalBase from "../../Modals/Modal/ModalBase"

// Assets
import img from "../../../assets/Dialogue.png"
import videoChat from "../../../assets/videochat.png"
import teacher from "../../../assets/teacher.png"
import workteam from "../../../assets/workteam.png"
import game from "../../../assets/game.png"
import actu from "../../../assets/actu.png"





import "./WelcomePageStyleSheet.scss"
import Listing from "../../Item/Listing/Listing"
import CardWelcomePage from "../../Item/CardItem/CardWelcomePage/CardWelcomePage"
import Img2 from './section4-background.png'



                            // Add after Welcome design down \\

//      <Button buttonSize={"small"} onclick={openLoginModal}> Login</Button>         \\

                            //           ---------             \\


const WelcomePage =()=>{

   

   const section=[
       'one',
       'two',
       'three',
       'four'
      
   ]

  
   let lang = "nederlands"
    return(
     
        <div className="WelcomePage-Container">
            <div className={`section ${section[0]}`}>
                <div className="text-content">                        
                    <h1 className="title">
                        Wil je leer {lang}
                    </h1>
                    <p className='text'>
                        Commodi minima excepturi repudiandae velit hic maxime
                        doloremque. Quaerat provident commodi consectetur veniam similique ad 
                        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                        suscipit quas? Nulla, placeat. 
                    </p>
                    <div>
                        <Button onclick={() => console.log('hello')} buttonStyles="color-blue">Begond</Button>
                    </div>
                </div>
                <div className="register-content">
                    <RegisterForm/>
                </div>
            </div>
            <div className={`section ${section[1]}`}>
                <h2 className="title-2">Wie wilt u zijn?</h2>
                <div className='section-card'>
                   <CardWelcomePage
                    icon="fas fa-chalkboard-teacher fa-2x"
                    title="Professor"
                    text="earum omnis ipsum saepe, voluptas, hic voluptates pariatur est ex"

                   />
                    <CardWelcomePage
                    icon="fas fa-user-graduate fa-2x"
                    title="Student"
                    text="Commodi minima excepturi repudiandae velit hic maxime doloremque."
                   />
                </div>
            </div>
            <div className={`section ${section[2]}`}>
                <h2 className="title-3">Onze functionaliteiten</h2>
                <div className="box">
                    <div className="slider">
                        <div className="slides">
                            <div className="slide"><img className="videoChat" src={workteam}/></div>
                            <div className="slide"><img className="videoChat" src={teacher}/></div>
                            <div className="slide"><img className="videoChat" src={videoChat}/></div>
                            <div className="slide"><img className="videoChat" src={actu}/></div>
                            <div className="slide"><img className="videoChat" src={game}/></div>
                        </div>
                    </div>
                    <div className="listing">
                        <CardWelcomePage
                            icon="fas fa-users fa-2x"
                            title="Maak een greop vrienden"
                            rowStyle={true}
                        />
                        <CardWelcomePage
                            icon="fab fa-leanpub fa-2x"
                            title="Leerd wordenschap en verbum,.."
                            rowStyle={true}
                        />
                        <CardWelcomePage
                            icon="fas fa-video fa-2x"
                            title="Maak een conversatietafel"
                            rowStyle={true}
                        />
                        <CardWelcomePage
                            icon="far fa-newspaper fa-2x"
                            title="File Actu om beter te leren "
                            rowStyle={true}
                        />
                        <CardWelcomePage
                            icon="fas fa-gamepad fa-2x"
                            title="Spelen"
                            rowStyle={true}
                        />
                    </div>
                </div>
            </div>
            <div className={`section ${section[3]}`}>
                <div className="section-four-text">
                </div>
            </div>
            <div className='Welcome-fouter'>
                    
            </div>
          
        </div>
      
    )

}

export default WelcomePage