//---IMPORTS
const Attributes = require('../../models/Attributes')
const Products = require('../../models/Products')


//---CREATE PRODUCT
exports.create = async (req, res) => {
    try {
        const { title, catId, description, vendorAddress, attributes } = req.body;
        const isExist = await Products.findOne({ title })
        if (isExist != null) {
            res.status(404).json({ message: "Product title should be unique" })
        }
        else {
            let arr = [];
            await Promise.all(
                attributes.map(async item => {
                    const attr = new Attributes({
                        image:item.image,
                        sizeId:item.sizeId,
                        colorId:item.colorId,
                        availabilty:item.availabilty,
                        native_price:item.native_price,
                        crypto_price:item.crypto_price
                    })
        
                    const _attr = await attr.save();
                    arr.push(_attr._id);
                })
            )
          
            const resp = new Products({
                vendorAddress,
                catId,
                title,
                description,
                attribute: arr
            })

            resp.save();

            res.status(200).json({ message: "Product Created Successfully" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---PRODUCT LISTING
exports.list = async (req, res) => {
    try {
        const products = await Products.find();
        let arr = [];
        let attr_array = [];
        await Promise.all(
            products.map(async item => {
                await Promise.all(
                        item.attribute.map(async el => {
                        const attr = await Attributes.findById({_id:el})
                        let _obj = {
                            image:attr.image,
                            sizeId:attr.sizeId,
                            colorId:attr.colorId,
                            availabilty:attr.availabilty,
                            native_price:attr.native_price,
                            crypto_price:attr.crypto_price
                        }
                        attr_array.push(_obj)
                    })
                )
                let obj = {
                    _id:item._id,
                    vendorAddress:item.vendorAddress,
                    title:item.title,
                    description:item.description,
                    attribute:attr_array
                }

                arr.push(obj)
            })
        )
        res.status(200).json(arr)
    } catch (error) {
        res.status(500).json(error.message)
    }
}