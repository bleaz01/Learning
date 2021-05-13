import React from "react";
import SelectModal from "../../Modals/SelectModal/SelectModal";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../lib/apollo/queries";
import SideBar from "../../layout/ModalSidebar/SideBar";
import "./HomeStyleSheet.scss";
import Post from "../../Item/Post/Post";
import {useDispatch} from "react-redux"


const Home = () => {
  const dispatch = useDispatch()
  // const { loading, error, data } = useQuery(GET_USER, {
    
  //   variables: { email: "ezlzorelzmfkldskfd"},
  // })
  
  // console.dir(data,"getuser")
  return (
    <div className="Home-container">
      {/* <div className="side"> */}
        <SideBar>
          <div className="sideBar-items">
            <div className="sideBar-icon">
              <i class="fas fa-book fa-1x"></i>
            </div>
            <p>Een stuk samevading</p>
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
