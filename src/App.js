import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import SingleProd from './pages/product/SingleProd';
import Cart from './pages/cart/Cart';
import { ToastContainer } from 'react-toastify';
import Blog from './pages/blog/Blog';
import Heart from './pages/heart/Heart';
import About from './pages/about/About';
import Contact from './components/Contact';
import AboutCon from './components/AboutCon';
import Login from './pages/login/Login';

function App() {

  return (
    <>
    <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/details/:id' element={<SingleProd />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/about' element={<About container={<AboutCon />} />} />
        <Route path='/contact' element={<About container = {<Contact />} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
