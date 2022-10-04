//---IMPORTS
const Sizes = require('../../models/Sizes');

//CREATE
exports.create = async (req,res) => {
    try {
        const isExist = await Sizes.findOne({
            title:req.body.title
        })

        if(isExist != null)
        {
            res.status(404).json({message:"Size already exist"})
        }
        else 
        {
            const resp = new Sizes({
                title:req.body.title
            })

            await resp.save();

            res.status(200).json({message:"Sizes added successfully"})
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}

//UPDATE
exports.update = async (req,res) => {
    try {
        const isExist = await Sizes.findById({_id:req.params.id})
        if(isExist != null)
        {
            if(req.body.title)
            {
                await Sizes.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        title:req.body.title
                    }
                })

                res.status(200).json({message:"Size updated successfully"})

            }
            else if(req.body.status === true || req.body.status === false)
            {
                await Sizes.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        status:req.body.status
                    }
                })

                res.status(200).json({message:"Size Status updated successfully"})
            }
        }
        else 
        {
            res.status(404).json({message:"Size not found"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---LIST SIZE
exports.fetchAll = async (req,res) => {
    try {
        const resp = await Sizes.find({status:true});
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error.message)
    }
}