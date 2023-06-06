const Category= require ("../Models/Category");

// create category


const createCategory = async(req,res)=>{
    // find if category already exists
    let category=await Category.findOne({categoryName:req.body.categoryName});

    if(category==null){

        await Category.create({categoryName:req.body.categoryName});

        res.json({
            success:true,
            message:'category is created'
        })
    }else{
        res.json({
            success:false,
            message:'category already exists'
        })
    }
}

const getALLCategories =async (req,res)=>{
    let categories=await Category.find({});

    res.json({
        success:false,
        message:'categories fetched successfully!',
        data:categories

    })
}

const updateCategory = async (req,res)=>{
    await Category.findByIdAndUpdate(req.body.id,{
        categoryName:req.body.categoryName.toLowerCase()
    });

    res.json({
        success:true,
        message:'category updated successfully!'
    });
}

const deleteCategory = async (req,res)=>{
    await Category.findByIdAndDelete(req.params.id);

    res.json({
        success:true,
        message:'category deleted successfully!'
    });
}


module.exports={
    createCategory,
    getALLCategories,
    updateCategory,
    deleteCategory

};