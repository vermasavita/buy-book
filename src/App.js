// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from 'mockman-js';
import { Navbar, Footer} from './components/index';
import { Login, Signup, Home, ProductListing, Cart, Wishlist} from './pages/index';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="products" element={<ProductListing />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/> 
        <Route path="/mock" element={<Mockman/>}/>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
