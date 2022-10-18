// ----IMPORTS
const Categories = require('../../models/Categories');

//---CREATE CATEGORY
exports.create = async (req,res) => {
    try {
        const isExist = await Categories.findOne({title:req.body.category})
        if(isExist != null)
        {
            res.status(404).json({message:"Category already exist"})
        }
        else 
        {
            const resp = new Categories({
                title:req.body.category,
                collection_address:req.body.collection_address
            })

            await resp.save();

            res.status(200).json({message:"Category created successfully"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---UPDATE CATEGORY
exports.update = async (req,res) => {
    try {
        const isExist = await Categories.findById({_id:req.params.id})
        if(isExist != null)
        {
            if(req.body.category)
            {
                await Categories.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        title:req.body.category
                    }
                })

                res.status(200).json({message:"Category updated successfully"})

            }
            else if(req.body.status === true || req.body.status === false)
            {
                await Categories.findByIdAndUpdate({_id:isExist._id},{
                    $set:{
                        status:req.body.status
                    }
                })

                res.status(200).json({message:"Category Status updated successfully"})
            }
        }
        else 
        {
            res.status(404).json({message:"Category not found"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//---LIST CATEGORIES
exports.fetchAll = async (req,res) => {
    try {
        const resp = await Categories.find({status:true});
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json(error.message)
    }
}