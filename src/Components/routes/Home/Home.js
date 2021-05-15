import React, { useState } from "react";
import SideBar from "../../layout/ModalSidebar/SideBar";
import "./HomeStyleSheet.scss";
import Post from "../../Item/Post/Post";
import {useDispatch, useSelector} from "react-redux"
import CreatePostModal from "../../Modals/CreatePostModal/CreatePostModal";
import ModalBase from "../../Modals/Modal/ModalBase";


const Home = () => {
  const dispatch = useDispatch()
  const [modalIsOpen,setIsOpen] = useState(true);

  let user = useSelector(state => state.user);
  user = user.user

  const openModal = () =>{
    setIsOpen(true);
    
}

const closeModal = () =>{
    setIsOpen(false);
}
  // const { loading, error, data } = useQuery(GET_USER, {
    
  //   variables: { email: "ezlzorelzmfkldskfd"},
  // })
  
  // console.dir(data,"getuser")


  return (
    <div className="Home-container">
       <ModalBase closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <CreatePostModal user={user}/>
      </ModalBase>
      {/* <div className="side"> */}
        <SideBar>
          <div onClick={()=> openModal()}  className="sideBar-items">
            <div className="sideBar-icon">
              <i  class="fas fa-book fa-1x"></i>
            </div>
            <p>Maak post</p>
          </div>
          <div className="sideBar-items">
            <div className="sideBar-icon">
              <i class="fab fa-cc-discover"></i>{" "}
            </div>
            <p>Een stuk samevading</p>
          </div>
        </SideBar>
      {/* </div> */}

      <div className="Home-main">
        <Post />
      </div>
     

    </div>
  );
};

export default Home;
