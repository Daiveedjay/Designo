// React imports and hooks
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Animation Libraries
import { AnimatePresence } from "framer-motion";

// Styles
import "./App.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Location from "./pages/locations/Location";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Webdesign from "./pages/services/Webdesign";
import Appdesign from "./pages/services/Appdesign";
import GraphicDesign from "./pages/services/GraphicDesign";
import Error from "./components/Error";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/webdesign" element={<Webdesign />} />
        <Route path="/services/appdesign" element={<Appdesign />} />
        <Route path="/services/graphicdesign" element={<GraphicDesign />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
