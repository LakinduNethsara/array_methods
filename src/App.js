import logo from './logo.svg';
import './App.css';
import ArrayMap from './components/ArrayMap';
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import ArrayForEach from './components/ArrayForEach';
import ArrayFind from './components/ArrayFind';

function App() {

  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
    "Karl",
    "Leo",
  ];

  const numbers = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ArrayMap nameList = { names } />
        <ArrayFilter nameList={names} />
        <ArrayReduce numberList={numbers} />
        <ArrayForEach nameList={names} />
        <ArrayFind nameList={names} numberList={numbers} />
      </header>
    </div>
  );
}

export default App;
