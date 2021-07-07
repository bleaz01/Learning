import React, { useEffect, useState } from "react";
import SideBar from "../../layout/ModalSidebar/SideBar";
import "./HomeStyleSheet.scss";
import Post from "../../Item/Post/Post";
import {useDispatch, useSelector} from "react-redux"
import CreatePostModal from "../../Modals/CreatePostModal/CreatePostModal";
import ModalBase from "../../Modals/Modal/ModalBase";
import { GET_POSTS } from "../../../lib/apollo/queries";
import { useLazyQuery, useQuery } from "@apollo/client";


const Home = () => {
  const dispatch = useDispatch()
  const [modalIsOpen,setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_POSTS);


    let posts 
    
    if(data){
      posts = data.posts

    }

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
        <CreatePostModal  closeModal={closeModal} user={user}/>
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
        {posts && posts.map( post => {
          return(
            <Post post={post}/>
          )
        })
        }
        
      </div>
     

    </div>
  );
};

export default Home;
