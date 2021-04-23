import React from "react";
import SelectModal from "../../Modals/SelectModal/SelectModal";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../../lib/apollo/queries";
import SideBar from "../../layout/ModalSidebar/SideBar";
import "./HomeStyleSheet.scss";

const Home = () => {
  const { loading, data, error } = useQuery(GET_USERS);

  // if(loading) return <div>loding....</div>
  // if(error) return console.log(error)
  // if(!data) return <div>no data</div>

  // console.dir(data)
  return (
    <div className="Home-container">
      <div className="side">
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
      </div>

      <div className="Home-main">
        <div className="post">
          <div className="post-container">
            <div className="post-header"></div>
            <div className="post-body"></div>
            <div className="post-footer"></div>
          </div>
          <div className="post-container">
            <div className="post-header"></div>
            <div className="post-body"></div>
            <div className="post-footer"></div>
          </div>
          <div className="post-container">
            <div className="post-header"></div>
            <div className="post-body"></div>
            <div className="post-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
