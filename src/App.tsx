import './App.css';
import { PeopleList } from './components/PeopleList';
import { SearchInput } from './components/SearchInput';
import { usePeople } from './hook/usePeople';
import Spinner from 'react-bootstrap/Spinner';




function App() {

  const { isLoading } = usePeople()

  return (
    <>

      <div>
        <PeopleList />
      </div>


    </>
  );
}

export default App;
