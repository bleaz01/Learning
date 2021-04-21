import React, { Suspense, lazy ,useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import useAxios from 'axios-hooks'
import useAuthentication from "./lib/hooks/useAuthent"


import './App.scss';
import WelcomePage from './Components/layout/WelcomePage/WelcomePage';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/routes/Profile/Profile';
import  Chat  from './Components/Chat/Chat';
import MyImg from './assets/jeason.jpg';
import SideBar from './Components/layout/ModalSidebar/SideBar';

//Routes

const Home = lazy(() => import('./Components/routes/Home/Home'));
const Games = lazy(() => import('./Components/routes/Games/Games'));
const Verbs = lazy(() => import('./Components/routes/Verbs/Verbs'));
const Vocabulary = lazy(() => import('./Components/routes/Vocabulary/Vocabulary'));
const Messenger = lazy(() => import('./Components/routes/Messenger/Messenger'));


function App() {


  const dispatch = useDispatch()
  const { handleAuthentication } = useAuthentication(dispatch)

  useEffect(()=>{
    handleAuthentication();
  },[])

  const user = useSelector((state) => state.user)
  console.log(user.user, "llouise")
  const [logged, setLogged] = useState(false)

  return (

    <div className="App">
      {
      user? 
      // logged?
      <>
      <Router>
        <header className="App-header">
          <NavBar user={user}/>
        </header>
        <div className="App-main">
          <div className="App-container">
            <Suspense fallback={<div>Chargement...</div>}>
              <Switch>
                <Route exact path={"/home"}>
                  <Home/>
                </Route>
                <Route path="/spelletjes">
                  <Games/>
                </Route>
                <Route path="/verbum">
                  <Verbs/>
                </Route>
                <Route path="/vocabulary">
                  <Vocabulary/>
                </Route>
                <Route path="/messenger">
                 <Messenger />
                </Route>
                <Route path ="/Profile">
                  <Profile />
                </Route>
              </Switch>
            </Suspense> 
          </div>
        </div>
        <footer className="App-footer">
          <p> © 2020-2021 Riguelle Jeason </p>
        </footer>
      </Router>
      </>
     :
     <WelcomePage/>
    }  
    </div>
     
  );
}

export default App;
