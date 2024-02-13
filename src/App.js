import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

//components
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from './components/Contact';
import Home from './components/Home';
import Travel from './components/Travel'

function App() {
  return (
    <>
    <div id="home">
      <Home/>
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="Travel">
      <Travel/>
    </div>
    <div id="Blog">
      <Blog/>
    </div>
    <div id="Contact">
      <Contact/>
    </div>
    </>
  );
}

export default App;
