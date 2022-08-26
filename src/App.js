import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
