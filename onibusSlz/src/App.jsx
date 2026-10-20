import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Linha from "./pages/Linha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linha/:id" element={<Linha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;