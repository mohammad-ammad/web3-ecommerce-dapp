//---IMPORTS
const Colors = require('../../models/Color')

//CREATE
exports.create = async (req,res) => {
    try {
        const isExist = await Colors.findOne({
            color:req.body.color
        })

        if(isExist != null)
        {
            res.status(404).json({message:"Color already exist"})
        }
        else 
        {
            const resp = new Colors({
                color:req.body.color
            })

            await resp.save();

            res.status(200).json({message:"Color added successfully"})
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}

//UPDATE

exports.update = async (req,res) => {
    try {
        const isExist = await Colors.findById({_id:req.params.id})
        if(isExist != null)
        {
            if(req.body.color)
            {
                await Colors.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        color:req.body.color
                    }
                })

                res.status(200).json({message:"Color updated successfully"})

            }
            else if(req.body.status === true || req.body.status === false)
            {
                await Colors.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        status:req.body.status
                    }
                })

                res.status(200).json({message:"Color Status updated successfully"})
            }
        }
        else 
        {
            res.status(404).json({message:"Color not found"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---LIST COLORS
exports.fetchAll = async (req,res) => {
    try {
        const resp = await Colors.find({status:true});
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error.message)
    }
}