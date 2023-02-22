import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
