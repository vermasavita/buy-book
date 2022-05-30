import { Routes, Route } from "react-router-dom";
import Mockman from 'mockman-js';
import { Navbar, Footer} from './components/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login, Signup, Home, ProductListing, Cart, Wishlist} from './pages/index';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
    </div>
  );
}

export default App;
