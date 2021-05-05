// @ts-nocheck

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useRouteMatch
} from "react-router-dom";

//component
import GetItem from "../../layout/GetItem";

//style
import "./VocabularyStyleSheet.scss";
import SelectModal from "../../Modals/SelectModal/SelectModal";
import SideBar from "../../layout/ModalSidebar/SideBar";

const Vocabulary = () => {
  // let {path,url} = useRouteMatch()
  let name = useLocation();
  let slug = name.pathname.split("/")[2];

 

  return (
    <div className="Voc-container">
      <div className="side">
        <SideBar>Messenger</SideBar>
      </div>
      <div className="Voc-header">
        <div className="Voc-main">
          <SelectModal />
        </div>
        <div className="Voc-body">
          <GetItem name={slug} />
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
