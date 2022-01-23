import '../css/App.css';
import Card from './Cards';
import DragonBall from '../DBPictures/DragonBall.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "header--img">
          <img src = {DragonBall}></img>
        </div>
        <div className = "header--text">
        <h1>Dragon Ball</h1>
        <h4>Memory Cards</h4>
        </div>
        
      </header>
      <Card />
    </div>
  );
}

export default App;
