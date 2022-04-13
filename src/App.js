// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from './pages/Products/ProductListing';
import { Cart } from './pages/Cart/Cart';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Login} from './pages/Authentication/Login';
import { Signup} from './pages/Authentication/SignUp';
import { Home } from "./pages/home/Home";
import Mockman from 'mockman-js';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="products" element={<ProductListing />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/> 
        <Route path="/mock" element={<Mockman/>}/>
      </Routes> 
    </div>
  );
}

export default App;
