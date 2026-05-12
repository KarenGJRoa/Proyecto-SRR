import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"; // Asegúrate de que la ruta sea correcta
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateOrder from "./pages/CreateOrder";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* La página de Login normalmente NO lleva Navbar ni Sidebar */}
        <Route path="/" element={<Login />} />

        {/* Todas las demás páginas van DENTRO del Layout */}
        <Route 
          path="/*" 
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-order" element={<CreateOrder />} />
                <Route path="/tracking" element={<Tracking />} />
              </Routes>
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
