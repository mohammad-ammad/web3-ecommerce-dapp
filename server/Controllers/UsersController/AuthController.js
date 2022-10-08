//---IMPORTS
const Users = require('../../models/Users');
const bcrpyt = require("bcryptjs");

//---CREATE USER (CUSTOM CREATION, GOOGLE SIGNUP, WALLET CONNECTION)
exports.create = async (req,res) => {
    try {
        const {username,email,password,wallet,auth_type,DOB,phone} = req.body;
        let hashpassword = "";

        //---VALIDATIONS
        if(!wallet)
        {
            throw Error("wallet address is required");
        }

        if(!auth_type)
        {
            throw Error("auth type is required");
        }

        if(email)
        {
            const isEmail = await Users.findOne({email});

            if(isEmail)
            {
                throw Error("Email already in used");
            }
        }

        if(wallet)
        {
            const isWallet = await Users.findOne({wallet});

            if(isWallet)
            {
                throw Error("Wallet address already in used");
            }
        }

        //---PASSWORD HASHING
        if(password)
        {
            hashpassword = await bcrpyt.hash(req.body.password,10);
        }

        //---CREATE USER
        const user = new Users({
            username,
            email,
            password:hashpassword,
            wallet,
            auth_type,
            DOB,
            phone
        })

        const resp = await user.save();

        res.status(200).json(resp);

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

//---CHECK USER IS ALREADY EXIST OR NOT
exports.isUser = async (req,res) => {
    try {
        const {email} = req.body;

        if(!email)
        {
            throw Error("Email is required");
        }

        const isExist = await Users.findOne({email})

        if(isExist)
        {
            res.status(200).json({message:false})
        }
        else 
        {
            res.status(200).json({message:true})
        }

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

//---CHECK IS WALLET IS ALREADY EXIST OR NOT
exports.isWallet = async (req,res) => {
    try {
        const {wallet} = req.body;

        if(!wallet)
        {
            throw Error("Wallet is required");
        }

        const isExist = await Users.findOne({wallet})

        if(isExist)
        {
            res.status(200).json({message:false})
        }
        else 
        {
            res.status(200).json({message:true})
        }

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

//---LOGIN USER (CUSTOM LOGIN)
exports.login = async (req,res) => {
    try {
        const {email,password,auth_type} = req.body;
        if(!email)
        {
            throw Error("Email is required");
        }
        
        const user = await Users.findOne({email})

        if(user && user.auth_type === auth_type)
        {
            let resp = await bcrpyt.compare(password,user.password)

            if(resp)
            {
                res.status(200).json(user)
            }
            else 
            {
                res.status(201).json({message:"Invalid Password"});
            }
        }
        else 
        {
            res.status(201).json({message:"Invalid User"});
        }
        
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

//---CREATE VENDOR SHOP 
exports.createShop = async (req,res) => {
    try {
        const {shop_address} = req.body;
        const isExist = await Users.findOne({wallet:req.params.address});
        if(isExist != null)
        {
            await Users.findByIdAndUpdate({_id:isExist._id},{
                $set:{
                    shop_address:shop_address
                }
            })

            res.status(200).json({message:"Shop Created Successfully"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---CHECK USER SHOPS
exports.checkShop = async (req,res) => {
    try {
        const shop = await Users.findOne({wallet:req.params.address});
        if(shop != null)
        {
            res.status(200).json({
                active:true,
                shop_address:shop.shop_address
            });
        }
        else 
        {
            res.status(200).json({
                active:false,
                shop_address:""
            });
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}