import React from 'react'
import { useContext } from 'react';
import walletIcon from '../assets/wallet_icon.png';
import { WalletContext } from '../context/WalletContext';

const WalletContent = ({setWalletModal, setInWalletModal}) => {
  //Getting Wallet Context 
  const {connect, wallet, disConnect} = useContext(WalletContext);

  //Connect Injected Wallet Function 
  const connectHandler = () => 
  {
    setWalletModal(false)
    connect()
  }

  //In app wallet toggler function
  const InAppWalletHandler = () => 
  {
    setWalletModal(false)
    setInWalletModal(true)
  }
  return (
    <>
    {
      wallet.isConnected ? 
      <div>
      <button className='flex bg-blue-500 text-white w-full p-2 rounded-xl mb-3'>
          <img src={walletIcon} className="rounded-full ml-3" alt="" srcset="" />
          <p className='w-full pt-0.5'>{`${wallet.address.slice(0,6)}...${wallet.address.slice(36)}`} <span className='text-xs'>(Connected)</span></p>
      </button>
      <button onClick={()=>disConnect()} className='flex bg-purple-500 text-white w-full p-2 rounded-xl'>
          <img src={walletIcon} className="rounded-full ml-3" alt="" srcset="" />
          <p className='w-full pt-1'>Disconnect</p>
      </button>
    </div>
      :
      <div>
      <button onClick={connectHandler} className='flex bg-blue-500 text-white w-full p-2 rounded-xl mb-3'>
          <img src={walletIcon} className="rounded-full ml-3" alt="" srcset="" />
          <p className='w-full pt-0.5'>Continue with Injected Wallet</p>
      </button>
      <button onClick={InAppWalletHandler} className='flex bg-purple-500 text-white w-full p-2 rounded-xl'>
          <img src={walletIcon} className="rounded-full ml-3" alt="" srcset="" />
          <p className='w-full pt-1'>Create In-App Wallet</p>
      </button>
    </div>
    }
   
    </>
  )
}

export default WalletContent