import { Route, Routes } from 'react-router';
import './App.css';
import VacancyList from './components/VacancyList';
import VacancyDetails from './components/VacancyDetails';
import Favourites from './components/Favourites';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path="/" element={<VacancyList />}/>
      <Route path="/vacancy/:id" element={<VacancyDetails />}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
    </div>
  );
}

export default App;
