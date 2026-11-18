import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "../pages/productList.jsx";
import ProductDetail from "../pages/productDetail.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
