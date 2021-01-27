import React, { Suspense, lazy ,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import LoggoudScreen from './Components/layout/LoggoudScreen/LoggoudScreen';
import NavBar from './Components/NavBar/NavBar';

//Routes

const Home = lazy(() => import('./Components/routes/Home/Home'));
const Games = lazy(() => import('./Components/routes/Games/Games'));
const Verbs = lazy(() => import('./Components/routes/Verbs/Verbs'));
const Vocabulary = lazy(() => import('./Components/routes/Vocabulary/Vocabulary'));
const Messenger = lazy(() => import('./Components/routes/Messenger/Messenger'));


function App() {

  const [logged, setLogged] = useState(false)
  return (

    <div className="App">
      {
      logged ? 
      <>
      <Router>
      
        <header className="App-header">
          <NavBar/>
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
     <LoggoudScreen/>
    }  
    </div>
     
  );
}

export default App;
