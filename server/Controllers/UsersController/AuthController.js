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