import './App.css';
import SearchBar from './components/SearchBar';
import { Route, Routes } from 'react-router-dom';
import Data from './components/Data';

function App() {
  return (
    <div className="bg-white h-screen w-full">
      <Routes>
        <Route path='/' element={<SearchBar />} />
        <Route path='/data' element={<Data />} />

      </Routes>

    </div>
  );
}

export default App;
