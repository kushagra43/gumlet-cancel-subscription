import "./App.css";
import { useRef } from "react";
import First from "./pages/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./pages/Second";
import Third from "./pages/Third";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Second />} />
          <Route path="/second" element={<First />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
