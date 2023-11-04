import logo from './logo.svg';
import './App.css';

function App() {
const name = 'John';
const isNameShowing = false;

  return (
    <div className="App">
      <h1>Heisannzzz {isNameShowing ? name : 'someone'}</h1>
    </div>
  );
}

export default App;
