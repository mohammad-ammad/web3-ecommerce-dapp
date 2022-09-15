import React from 'react'
import ProductDetailSection from '../components/ProductDetailSection'
import WhatsInclude from '../components/WhatsInclude'
import Faq from '../components/Faq'
import ContactUs from '../components/ContactUs'
import ReviewModel from '../components/ReviewModel'
import { useState } from 'react'
import ConfirmOrderModel from '../components/ConfirmOrderModel'
const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <div>
        <ProductDetailSection setShowModal={setShowModal}/>
        <WhatsInclude/>
        <Faq/>
        <ContactUs/>
        <ReviewModel showModal={showModal} setShowModal={setShowModal} setConfirmModal={setConfirmModal}/>
        <ConfirmOrderModel confirmModal={confirmModal} setConfirmModal={setConfirmModal} setShowModal={setShowModal}/>
    </div>
  )
}

export default ProductDetails