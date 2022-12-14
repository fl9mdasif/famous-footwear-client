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
import ShoeDetails from './Components/Products/ShoeDetails';
import MyItems from './Components/Products/MyItems';
import NotFound from './Components/Shared/NotFound';
import ManageProduct from './Components/Products/ManageProduct';
import PrivateAuth from './Components/Shared/Login/PrivateAuth';
import BlogDetails from './Components/Blog/BlogDetails';
import Blogs from './Components/Blog/Blogs';

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='/blogDetails/:blogID' element={
          <BlogDetails />
        } />


        {/* shoe store && user facilities   */}
        <Route path='/allshoes' element={<AllShoes />} />

        {/* product details   */}
        <Route path='/productDetails/:productID' element={
          <PrivateAuth>
            <ShoeDetails />
          </PrivateAuth>
        } />

        <Route path='/addshoe' element={
          <PrivateAuth>
            <AddShoe />
          </PrivateAuth>
        } />
        <Route path='/manageshoes' element={
          <PrivateAuth>
            <ManageProduct />
          </PrivateAuth>
        } />
        <Route path='/myitems' element={
          <PrivateAuth>
            <MyItems />
          </PrivateAuth>
        } />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
