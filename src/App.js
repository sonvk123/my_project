import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./Component/Auth/Login/Login";
import Register from "./Component/Auth/Register/Register";
import Identify from "./Component/Auth/identify/identify";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/identify" element={<Identify />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
