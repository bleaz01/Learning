import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar/NavBar';

//Routes

const Home = lazy(() => import('./Components/routes/Home/Home'));
const Games = lazy(() => import('./Components/routes/Games/Games'));
const Verbs = lazy(() => import('./Components/routes/Verbs/Verbs'));
const Vocabulary = lazy(() => import('./Components/routes/Vocabulary/Vocabulary'));


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <div className="App-Nav">
          <NavBar/>
        </div>
        <div className="App-container">
          <div clasName="App-sideBar">
            sidebar
          </div>
          <div className="App-main">
          
              <Suspense fallback={<div>Chargement...</div>}>
                <Switch>
                  <Route exact path="/">
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
                </Switch>
              </Suspense>
             
          </div>
        </div>
        <div className="App-footer">
          footer
        </div>
      </header>
      </Router>
    </div>
  );
}

export default App;
