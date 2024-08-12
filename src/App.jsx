import { Footer, Header } from "./components";
import { Home, Shop, Collection, AboutUs } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/Aboutus" element={<AboutUs />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
