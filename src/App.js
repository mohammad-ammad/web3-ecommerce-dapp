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
import { useContext, useEffect, useState } from 'react';
import WalletModel from './components/WalletModel';
import InAppWalletModel from './components/InAppWalletModel';
import {Toaster} from 'react-hot-toast';
import SignUpModel from './components/SignUpModel';
import EmailSignUpModel from './components/EmailSignUpModel';
import Orders from './pages/Orders';
import ViewOrder from './components/Orders/ViewOrder';
import Register from './pages/VendorPortal/Register';
import Login from './pages/VendorPortal/Login';
import Dashboard from './pages/VendorPortal/Dashboard';
import SideBar from './components/Vendor/SideBar';
import ListedProduct from './pages/VendorPortal/ListedProduct';
import ListProduct from './pages/VendorPortal/ListProduct';
import VendorOrders from './pages/VendorPortal/VendorOrders';
import Admin from './pages/Admin/Admin';

function App() {

  //----Intialized States Varibales
  const [showModal, setShowModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [inWalletModal, setInWalletModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [authModel, setAuthModel] = useState(false);
 
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
        <Navbar setShowModal={setShowModal} setIsSignUp={setIsSignUp}/>
        {/* <SideBar/> */}
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/how-it-works' element={<HowItsWorks/>}/>
        <Route path='/view-collections' element={<Collections/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
        <Route path='/account-settings' element={<AccountSettings/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/view-orders' element={<ViewOrder/>}/>

        {/* vendor routes  */}
        <Route path='/seller-register' element={<Register/>}/>
        <Route path='/seller-login' element={<Login/>}/>
        <Route path='/seller-dashboard' element={<Dashboard/>}/>
        <Route path='/seller-products' element={<ListedProduct/>}/>
        <Route path='/seller-list-product' element={<ListProduct/>}/>
        <Route path='/seller-orders' element={<VendorOrders/>}/>

        {/* admin  */}
          <Route path='/admin' element={<Admin/>}/>

        </Routes>
        <AuthModel showModal={showModal} setShowModal={setShowModal} setWalletModal={setWalletModal}/>
        <SignUpModel isSignUp={isSignUp} setIsSignUp={setIsSignUp} setAuthModel={setAuthModel} />
        <EmailSignUpModel authModel={authModel} setAuthModel={setAuthModel}/>
        <WalletModel walletModal={walletModal} setWalletModal={setWalletModal} setInWalletModal={setInWalletModal}/>
        <InAppWalletModel inWalletModal={inWalletModal} setInWalletModal={setInWalletModal} />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
