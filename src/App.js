import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import HowItsWorks from './pages/HowItsWorks';
import Collections from './pages/Collections';
import ProductDetails from './pages/ProductDetails';
import AccountSettings from './pages/AccountSettings';
import AuthModel from './components/AuthModel';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <BrowserRouter>
      <Navbar setShowModal={setShowModal}/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/how-it-works' element={<HowItsWorks/>}/>
      <Route path='/view-collections' element={<Collections/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/account-settings' element={<AccountSettings/>}/>
      </Routes>
      <AuthModel showModal={showModal} setShowModal={setShowModal}/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
