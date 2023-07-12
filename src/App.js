import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import OrdersPage from "./pages/OrdersPage";
import SaleOrderItemPage from "./pages/SaleOrderItemPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SaleOrderItemPage />}></Route>
        <Route path="/items" element={<ItemsPage />}></Route>
        <Route path="/orders" element={<OrdersPage />}></Route>
        <Route path="/sales" element={<SaleOrderItemPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
