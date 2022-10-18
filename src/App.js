import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OrderMenu from "./pages/OrderMenu/OrderMenu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<OrderMenu></OrderMenu>}></Route>
      </Routes>
    </div>
  );
}

export default App;
