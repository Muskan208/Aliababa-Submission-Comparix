import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Screens/Home';
import Scrape from './Screens/Scrape';
import About from './Screens/About';
import Login from './Screens/Login';
import Admin from './Screens/Admin';
import { UserProvider } from './provider/Auth';
function App() {
  return (
    <UserProvider>
      <div className="Home">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrape" element={<Scrape />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />

        </Routes>
        {/* <Home/> */}
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
