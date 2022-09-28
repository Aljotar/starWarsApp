import './App.css';
import { PeopleList } from './components/PeopleList';
import Spinner from 'react-bootstrap/Spinner';
import { Image } from "react-bootstrap";




function App() {

  return (
    <>
      <Image
        src="https://cdn.goodvinilos.com/61003/vinilo-logo-star-wars.jpg"
      />
      <div>
        <PeopleList />
      </div>
    </>
  );
}

export default App;
