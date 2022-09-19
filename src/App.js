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
import WalletModel from './components/WalletModel';
import InAppWalletModel from './components/InAppWalletModel';
import {Toaster} from 'react-hot-toast';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [inWalletModal, setInWalletModal] = useState(false);
  return (
    <>
    <Toaster 
          position='bottom-right'
          toastOptions={{
            success:{
              theme: {
                primary:'#4aed88'
              }
            }
          }}
        >

    </Toaster>
    <BrowserRouter>
      <Navbar setShowModal={setShowModal}/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/how-it-works' element={<HowItsWorks/>}/>
      <Route path='/view-collections' element={<Collections/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/account-settings' element={<AccountSettings/>}/>
      </Routes>
      <AuthModel showModal={showModal} setShowModal={setShowModal} setWalletModal={setWalletModal}/>
      <WalletModel walletModal={walletModal} setWalletModal={setWalletModal} setInWalletModal={setInWalletModal}/>
      <InAppWalletModel inWalletModal={inWalletModal} setInWalletModal={setInWalletModal} />
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
