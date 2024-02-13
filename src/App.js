import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
//components
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from './components/Contact';
import Home from './components/Home';
import Travel from './components/Travel'

function App() {
  return (
    <>
    <div>
      <Home/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Travel/>
    </div>
    <div>
      <Blog/>
    </div>
    <div>
      <Contact/>
    </div>
    </>
  );
}

export default App;
