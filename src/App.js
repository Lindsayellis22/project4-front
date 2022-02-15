
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Home.js';
import CreatePet from './components/CreatePet.js'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/species/:id' element={ <CreatePet />} />
      </Routes>
    </div>
  );
}

export default App;
