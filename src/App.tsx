import logo from './logo.svg';
import './App.css';
import { usePeople } from './hook/usePeople';

function App() {


  const { peopleList } = usePeople();

  console.log(peopleList)

  return (
    <div className="App">
        <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
