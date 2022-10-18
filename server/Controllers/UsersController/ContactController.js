const Contacts = require('../../models/Contact')

//---CREATE CONTACT
exports.createMessage = async (req,res) => {
    try {
        const resp = new Contacts({
            email:req.body,
            message:req.message
        })
        await resp.save()
        res.status(200).json("Message sent Successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}