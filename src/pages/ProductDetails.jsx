import React from 'react'
import ProductDetailSection from '../components/ProductDetailSection'
import WhatsInclude from '../components/WhatsInclude'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import ReviewModel from '../components/ReviewModel'
import { useState } from 'react'
import ConfirmOrderModel from '../components/ConfirmOrderModel'
import AccountInfoModel from '../components/AccountInfoModel'
import Slider from '../components/Slider'
import MoreDetails from '../components/MoreDetails'
import { useContext } from 'react'
import { WalletContext } from '../context/WalletContext'
const ProductDetails = ({showModal : authmodel,setShowModal : setAuthModel}) => {

  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [accountInfo, setAccountInfo] = useState(false);
  const {wallet} = useContext(WalletContext)

  return (
    <div>
        <ProductDetailSection setShowModal={setShowModal} isshowModal={authmodel} setIsShowModal={setAuthModel}/>
        <Slider/>
        <MoreDetails/>
        <WhatsInclude/>
        <Faq/>
        <ContactUs/>
        <ReviewModel showModal={showModal} setShowModal={setShowModal} setConfirmModal={setConfirmModal} setAccountInfo={setAccountInfo} />
        <ConfirmOrderModel confirmModal={confirmModal} setConfirmModal={setConfirmModal} setShowModal={setShowModal} setAccountInfo={setAccountInfo}/>
        <AccountInfoModel accountInfo={accountInfo} setAccountInfo={setAccountInfo} setConfirmModal={setConfirmModal}/>
    </div>
  )
}

export default ProductDetails