import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from './pages/Products/ProductListing';
import { Cart } from './pages/Cart/Cart';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Login} from './pages/Authentication/Login';
import { Signup} from './pages/Authentication/SignUp';
import { Home } from "./pages/home/Home";
// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="products" element={<ProductListing />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/> 
      </Routes> 
    </div>
  );
}

export default App;
