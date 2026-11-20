import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Navbar />
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
