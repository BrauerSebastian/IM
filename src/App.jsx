import Login from "./pages/Login";
import Home from "./pages/Home";
import Misioneros from "./pages/Misioneros";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Grupos from "./pages/Grupos";
import Directiva from "./pages/Directiva";
import Cargos from "./pages/Cargos";
import Salidas from "./pages/Salidas";
import Usuarios from "./pages/Usuarios";
import UserForm from "./components/UserForm";
import AddEdditForm from "./components/AddEditForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/misioneros" element={<Misioneros />}></Route>
          <Route path="/grupos" element={<Grupos />}></Route>
          <Route path="/directiva" element={<Directiva />}></Route>
          <Route path="/salidas" element={<Salidas />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/cargos" element={<Cargos />}></Route>
          <Route path="/form" element={<AddEdditForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
