import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About';
// import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import Nav from './components/Nav';
import { Shop } from './components/Shop';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Nav" element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;
