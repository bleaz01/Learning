import React,{useState} from 'react'
import LoginForm from '../../Forms/LoginForm/LoginForm'
import ProfileForm from '../../Forms/ProfileForm/ProfileForm'
import ModalBase from '../Modal/ModalBase'
import Chart from 'react-apexcharts'

import MyImg from '../../../assets/jeason.jpg'

import "./ProfileStyleSheet.scss"
import GraphRadar from '../../../utils/GraphRadar'
import ChartProfile from './ChartProfile'
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {

   
  const user = useSelector(state => state.user);

    return(
        <div className="container-profile">
                <div className="profile-heater">
                    <h2 className="profile-title">{user.user.email}</h2>
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
                        
                        {user.user.role}

                  </div>
                 
                </div>
        </div>
    )
}

export default Profile