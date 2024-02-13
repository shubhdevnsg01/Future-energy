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
    <Router>
      <Routes>
      <Route path="/About" element={<About/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Travel" element={<Travel/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      </Router>  
    </>
  );
}

export default App;
