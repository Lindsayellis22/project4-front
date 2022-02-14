
import './App.css';
// import Radclyf from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Radclyf.js';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Home.js';

function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      {/* <Radclyf color='hotpink' /> */}
      <Home />
    </div>
  );
}

export default App;
