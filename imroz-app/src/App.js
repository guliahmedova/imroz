import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
