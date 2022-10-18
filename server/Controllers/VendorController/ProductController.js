//---IMPORTS
const Attributes = require('../../models/Attributes')
const Products = require('../../models/Products')
const Sizes = require('../../models/Sizes')
const Color = require('../../models/Color')
const Categories = require('../../models/Categories')

//---CREATE PRODUCT
exports.create = async (req, res) => {
    try {
        const { title, catId, description,availabilty,native_price,crypto_price, vendorAddress, attributes } = req.body;
        const isExist = await Products.findOne({ title })
        if (isExist != null) {
            res.status(404).json({ message: "Product title should be unique" })
        }
        else {
            let arr = [];
            await Promise.all(
                attributes.map(async item => {
                    const attr = new Attributes({
                        image: item.image,
                        sizeId: item.sizeId,
                        colorId: item.colorId,
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
                availabilty,
                native_price,
                crypto_price,
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
                const category = await Categories.findOne({collection_address:item.catId});
                await Promise.all(
                    item.attribute.map(async el => {
                        const attr = await Attributes.findById({ _id: el })
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
                    _id: item._id,
                    vendorAddress: item.vendorAddress,
                    title: item.title,
                    description: item.description,
                    native_price:item.native_price,
                    crypto_price:item.crypto_price,
                    category:category['title'],
                    collection_address:item.catId,
                    attribute: attr_array
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

//---PRODUCT BY VENDOR ADDRESS
exports.listByVendorAddress = async (req, res) => {
    try {
        const products = await Products.find({ vendorAddress: req.params.address })
        let arr = [];
        let attr_array = [];
        await Promise.all(
            products.map(async item => {
                await Promise.all(
                    item.attribute.map(async el => {
                        const attr = await Attributes.findById({ _id: el })
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
                    _id: item._id,
                    vendorAddress: item.vendorAddress,
                    title: item.title,
                    description: item.description,
                    attribute: attr_array
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

//---PRODUCT BY ID
exports.listById = async (req, res) => {
    try {
        const product = await Products.findById({ _id: req.params.id })
        let arr = [];
        let attr_array = [];

        await Promise.all(
            product.attribute.map(async el => {
                const attr = await Attributes.findById({ _id: el })
                const _size = await Sizes.findById({ _id: attr.sizeId })
                const _clr = await Color.findById({ _id: attr.colorId })
                let _obj = {
                    image: attr.image,
                    size: _size.title,
                    color: _clr.color
                }
                attr_array.push(_obj)
            })

        )
        const category = await Categories.findOne({collection_address:product.catId});
        let obj = {
            _id: product._id,
            vendorAddress: product.vendorAddress,
            title: product.title,
            description: product.description,
            native_price:product.native_price,
            crypto_price:product.crypto_price,
            category:category['title'],
            collection_address:product.catId,
            attribute: attr_array
        }

        arr.push(obj)

        res.status(200).json(arr)

    } catch (error) {
        res.status(500).json(error.message)
    }
}