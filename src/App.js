import logo from './logo.svg';
import './App.css';
import ArrayMap from './components/ArrayMap';
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import ArrayForEach from './components/ArrayForEach';
import ArrayFind from './components/ArrayFind';
import ArrayFindIndex from './components/ArrayFindIndex';
import ArraySome from './components/ArraySome';
import ArrayEvery from './components/ArrayEvery';
import ArraySort from './components/ArraySort';
import ArraySlice from './components/ArraySlice';
import ArraySplice from './components/ArraySplice';
import ArrayFlat from './components/ArrayFlat';
import ArrayFlatMap from './components/ArrayFlatMap';

function App() {

  const names = [
    "Heidi",
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Ivan",
    "Grace",
    "Frank",
    "Judy",
    "Leo",
    "Karl",
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
        <ArrayFindIndex nameList={names} />
        <ArraySome nameList={names} />
        <ArrayEvery nameList={names} />
        <ArraySort nameList={names} />
        <ArraySlice nameList={names} />
        <ArraySplice nameList={names} />
        <ArrayFlat nameList={names} />
        <ArrayFlatMap nameList={names} />
      </header>
    </div>
  );
}

export default App;
