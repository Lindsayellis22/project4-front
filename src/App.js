
import './App.css';
// import Radclyf from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Radclyf.js';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Home.js';
import RadclyfPage from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/RadclyfPage.js'
function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <RadclyfPage />
      {/* <Radclyf color='hotpink' /> */}
      <Home />
    </div>
  );
}

export default App;
