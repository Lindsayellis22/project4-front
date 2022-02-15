
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Radclyf from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Radclyf.js';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Home.js';
import RadclyfPage from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/RadclyfPage.js'
function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/species/id' element={ <RadclyfPage />} />
      </Routes>
      {/* <Radclyf color='hotpink' /> */}
    </div>
  );
}

export default App;
