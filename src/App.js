import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Home.js';
import CreatePet from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/CreatePet.js'
import AdoptedPets from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/AdoptedPets.js'
import GlobalStyles from '/Users/lindsayellis/SEI/projects/project4-frontend/src/globalStyles.js';
function App() {
  return (
    <div className="App">
      <header>
        <GlobalStyles />
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/species/:id' element={<CreatePet />} />
        <Route path='/pets' element={<AdoptedPets />} />
      </Routes>
    </div>
  );
}

export default App;
