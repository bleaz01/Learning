import React from "react"

import MyImg from "../../..//assets/jeason.jpg"
import "./SideBarStyleSheet.scss"
const SideBar = ({children})=>{
    return(
      <div className="page-content">
        <div className="App-sidebar"> 
          <div className="sideBar-content">
            <div className="sideBar-content-header">
              <div className="sideBar-img">
                <img src={MyImg} alt='img user'/>
              </div>
              <h2 className='sideBar-title'>title <span>Lv 11</span></h2>
            </div>
            <div className="sideBar-content-body">
              {children}
            
            </div>
          </div>
        </div>
      </div>
    )
}
export default SideBar
          