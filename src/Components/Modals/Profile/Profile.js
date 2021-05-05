import React,{useState} from 'react'
import LoginForm from '../../Forms/LoginForm/LoginForm'
import ProfileForm from '../../Forms/ProfileForm/ProfileForm'
import ModalBase from '../Modal/ModalBase'
import Chart from 'react-apexcharts'

import MyImg from '../../../assets/jeason.jpg'

import "./ProfileStyleSheet.scss"
import GraphRadar from '../../../utils/GraphRadar'
import ChartProfile from './ChartProfile'

const Profile = () => {

   
    
    return(
        <div className="container-profile">
               
                <div className="profile-heater">
                    <h2 className="profile-title">LaCreme</h2>
                    <div className="profile-follower">
                        <span>follower: 89</span>
                        <span>friends: 60</span>
                    </div>
                </div>
                <div className="profile-main">
                  <div className="uix">
                    <img className="profile-img" src={MyImg}/>
                    <div className="chartStyle">
                      <ChartProfile/>
                    </div>
                  </div>
                  <div className="profile-description">

                  </div>
                 
                </div>
        </div>
    )
}

export default Profile