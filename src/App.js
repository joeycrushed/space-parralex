import './App.css';
import Man from './components/Man';
import Rocket from './components/Rocket';
import Moon from './Moon';
import Parallax from 'react-rellax'

function App() {
  return (

      <div>
      
      <div className="App">
      <h1 className="title">Welcome to Space</h1>
        <div className="left">
          <Parallax speed={ 10 }>
            <Man />
          </Parallax>
        </div>
        <div className="right">
        <Parallax speed={ 3 }>
          <Moon />
        </Parallax>
        <Parallax speed={ 50 } centered={true}>
          <Rocket />
        </Parallax>
        </div>
      </div>
        <div className="textcontent">
          <h1>Space is a vast place</h1>
          <p>There are aliens out there so you gotta becareful!</p>
        </div>

      </div>

  );
}

export default App;
