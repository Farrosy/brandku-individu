import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";    
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
