import React,{useState} from "react"


import MyImg from "../../..//assets/jeason.jpg"
import ModalBase from "../../Modals/Modal/ModalBase";
import Profile from "../../Modals/Profile/Profile";
import "./SideBarStyleSheet.scss"

const SideBar = ({children})=>{ 
  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = () =>{
    setIsOpen(true);
    
  }

  const closeModal = () =>{
      setIsOpen(false);
  }

    return(
      <>
        <div className="page-content">
        <div className="App-sidebar"> 
          <div className="sideBar-content">
            <div className="sideBar-content-header">
              <div className="sideBar-img">
                <>
                <img onClick={openModal} src={MyImg} alt='img user'/>
                <ModalBase closeModal={closeModal} modalIsOpen={modalIsOpen}>
                    <Profile/>
                </ModalBase>
                </>
              </div>
              <h2 className='sideBar-title'>title <span>Lv 11</span></h2>
            </div>
            <div className="sideBar-content-body">
              {children}
    
            </div>
          </div>
        </div>
      </div>

      <div className="sideBar-list-icon">
        <div className="sideBar-img">
                <>
                <img onClick={openModal} src={MyImg} alt='img user'/>
                <ModalBase closeModal={closeModal} modalIsOpen={modalIsOpen}>
                    <Profile/>
                </ModalBase>
                </>
        </div>
        <div className="list-icon">
          <i  class="fas fa-bars "></i>

        </div>
        <div className="list-icon">
          <i  class="fas fa-bars "></i>

        </div>
        <div className="list-icon">
          <i  class="fas fa-bars "></i>

        </div>
        <div className="list-icon">
          <i  class="fas fa-bars "></i>

        </div>
        <div className="list-icon">
          <i  class="fas fa-bars "></i>

        </div>

      </div>
      </>
    
    )
}
export default SideBar
          