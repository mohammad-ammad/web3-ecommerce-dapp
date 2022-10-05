//---IMPORTS
const Attributes = require('../../models/Attributes');
const Color = require('../../models/Color');
const Orders = require('../../models/Order');
const Payment = require('../../models/Payment');
const Products = require('../../models/Products');
const Sizes = require('../../models/Sizes');

//---CREATE ORDER
exports.create = async (req, res) => {
    try {
        const {product_id,vendorAddress,userAddress,quantity,status,type,price} = req.body;
        if(!product_id || !vendorAddress || !userAddress || !quantity || !status || !type || !price)
        {
            throw Error("Please Fill All Fields");
        }
        const resp = new Orders({
            product_id,
            vendorAddress,
            userAddress,
            quantity,
            status
        })

        const order = await resp.save();
        const payment = new Payment({
            order_id:order._id,
            type,
            price
        })

        await payment.save();

        res.status(200).json({message:"Order Placed Successfully"})
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---LIST USER ORDERS 
exports.listForUser = async (req, res) => {
    try {
        let arr = [];
        let attr_array = [];
        const orders = await Orders.find({userAddress:req.params.address})
        await Promise.all(
            orders.map(async el => {
                const payment = await Payment.findOne({order_id:el._id})
                const product = await Products.findById({_id:el.product_id})
                await Promise.all(
                    product.attribute.map(async item => {
                        const attr = await Attributes.findById({_id:item})
                        const _size = await Sizes.findById({ _id: attr.sizeId })
                        const _clr = await Color.findById({ _id: attr.colorId })

                        let _obj = {
                            image: attr.image,
                            size: _size.title,
                            color: _clr.color,
                            availabilty: attr.availabilty,
                            native_price: attr.native_price,
                            crypto_price: attr.crypto_price
                        }
                        attr_array.push(_obj)
                    })
                )
                let obj = {
                    title:product.title,
                    description:product.description,
                    attributes:attr_array,
                    order:[
                        {
                            vendorAddress:el.vendorAddress,
                            userAddress:el.userAddress,
                            quantity:el.quantity,
                            status:el.status
                        }
                    ],
                    payment:[
                        {
                            type:payment.type,
                            price:payment.price,
                            transaction_id:payment?.transaction_id
                        }
                    ]
                }

                arr.push(obj)
                attr_array = [];
            })
        )
        res.status(200).json(arr)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---LIST VENDOR ORDERS
exports.listForVendor = async (req, res) => {
    try {
        let arr = [];
        let attr_array = [];
        const orders = await Orders.find({vendorAddress:req.params.vendor})
        await Promise.all(
            orders.map(async el => {
                const payment = await Payment.findOne({order_id:el._id})
                const product = await Products.findById({_id:el.product_id})
                await Promise.all(
                    product.attribute.map(async item => {
                        const attr = await Attributes.findById({_id:item})
                        const _size = await Sizes.findById({ _id: attr.sizeId })
                        const _clr = await Color.findById({ _id: attr.colorId })

                        let _obj = {
                            image: attr.image,
                            size: _size.title,
                            color: _clr.color,
                            availabilty: attr.availabilty,
                            native_price: attr.native_price,
                            crypto_price: attr.crypto_price
                        }
                        attr_array.push(_obj)
                    })
                )
                let obj = {
                    title:product.title,
                    description:product.description,
                    attributes:attr_array,
                    order:[
                        {
                            vendorAddress:el.vendorAddress,
                            userAddress:el.userAddress,
                            quantity:el.quantity,
                            status:el.status
                        }
                    ],
                    payment:[
                        {
                            type:payment.type,
                            price:payment.price,
                            transaction_id:payment?.transaction_id
                        }
                    ]
                }

                arr.push(obj)
                attr_array = [];
            })
        )
        res.status(200).json(arr)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---UPDATE ORDER STATUS
exports.update = async (req, res) => {
    try {
        if(req.body.status)
        {
            await Orders.findByIdAndUpdate({_id:req.params.id},{
                $set:{
                    status:req.body.status
                }
            })
        }
        else if(req.body.quantity)
        {
            await Orders.findByIdAndUpdate({_id:req.params.id},{
                $set:{
                    quantity:req.body.quantity
                }
            })
        }
        else if(req.body.transaction_id)
        {
            await Payment.findByIdAndUpdate({order_id:req.params.id},{
                $set:{  
                    transaction_id:req.body.transaction_id
                }
            })
        }

        res.status(200).json({message:"Order Updated Successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}