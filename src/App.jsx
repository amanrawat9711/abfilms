import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Allfilms from "./pages/Allfilms";
import Footer from "./shared/Footer";
import FilmDetails from "./shared/FilmDetails";
import ServicesPage from "./pages/Services";
import Carrier from "./pages/Carrier";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/films" element={<Allfilms />} />
        <Route path="/films/:id" element={<FilmDetails />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;