import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'boxicons';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Login from './Components/Shared/Login/Login';
import SignUp from './Components/Shared/Login/SignUp';
import AddShoe from './Components/Products/AddShoe';
import AllShoes from './Components/Products/AllShoes';
// import ManageShoes from './Components/Products/ManageProduct';
import ShoeDetails from './Components/Products/ShoeDetails';
import MyItems from './Components/Products/MyItems';
import NotFound from './Components/Shared/NotFound';
import Practice from './Components/Practice';
import ManageProduct from './Components/Products/ManageProduct';

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/prac' element={<Practice />} />

        {/* shoe store && user facilities   */}
        <Route path='/allshoes' element={<AllShoes />} />
        <Route path='/productDetails/:productID' element={<ShoeDetails />} />

        <Route path='/addshoe' element={<AddShoe />} />
        <Route path='/manageshoes' element={<ManageProduct />} />
        <Route path='/myitems' element={<MyItems />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
