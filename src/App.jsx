import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DramaDetail from "./pages/DramaDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drama/:id" element={<DramaDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;