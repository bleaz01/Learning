import React, { Suspense, lazy ,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import useAxios from 'axios-hooks'

import './App.scss';
import WelcomePage from './Components/layout/WelcomePage/WelcomePage';
import NavBar from './Components/NavBar/NavBar';

//Routes

const Home = lazy(() => import('./Components/routes/Home/Home'));
const Games = lazy(() => import('./Components/routes/Games/Games'));
const Verbs = lazy(() => import('./Components/routes/Verbs/Verbs'));
const Vocabulary = lazy(() => import('./Components/routes/Vocabulary/Vocabulary'));
const Messenger = lazy(() => import('./Components/routes/Messenger/Messenger'));


function App() {

  const user = useSelector((state) => state.user)
  const [logged, setLogged] = useState(false)

// const [{ data, loading, error }, refetch] = useAxios(
//   'http://localhost:3000/api/auth/session'
// )

// console.log(data, '====')
console.log(user, "les bases")
  

  return (

    <div className="App">
      {
      user ? 
      <>
      <Router>
      
        <header className="App-header">
          <NavBar user={user}/>
        </header>
        <div className="App-main">
          <div className="App-sidebar"> 
              sidebar
          </div>
          <div className="App-container">
            
            <Suspense fallback={<div>Chargement...</div>}>
              <Switch>
                <Route exact path={"/home"}>
                  <Home/>
                </Route>
                <Route path="/Spelletjes">
                  <Games/>
                </Route>
                <Route path="/Verbum">
                  <Verbs/>
                </Route>
                <Route path="/Woordenschat">
                  <Vocabulary/>
                </Route>
                <Route path="/Conversatie">
                 <Messenger/>
                </Route>
              </Switch>
            </Suspense> 
          
          </div>
         
        </div>
        
        <footer className="App-footer">
          footer
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
