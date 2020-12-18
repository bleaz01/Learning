import './App.css';
import Input from './Components/Item/Input/Input';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/view/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Nav">
          <NavBar/>
        </div>
        <div className="App-container">
          <div className="App-main">
            {/* <TextInput></TextInput> */}
            {/* <Home/> */}
          </div>
          <div clasName="App-sideBar">
            sidebar
          </div>
        </div>
        <div className="App-footer">
          footer
        </div>
      </header>
    </div>
  );
}

export default App;
