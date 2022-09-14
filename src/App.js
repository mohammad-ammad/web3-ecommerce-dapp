import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import HowItsWorks from './pages/HowItsWorks';
import Collections from './pages/Collections';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/how-it-works' element={<HowItsWorks/>}/>
      <Route path='/view-collections' element={<Collections/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
