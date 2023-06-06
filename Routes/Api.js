const express =require("express");
const router= express.Router();

const {createCategory, getALLCategories,updateCategory,
    deleteCategory}=require("../Controllers/CategoryController")
// defining all routes


// router.get("/test",(req,res)=>{
//     res.json({
//         status:true,
//         message: "this route is working fine"
//     })
// })

// category route
router.post("/store/category",createCategory);
router.get("/get/categories",getALLCategories);
router.post("/update/category",updateCategory);
router.get("/delete/category/:id",deleteCategory);



module.exports=router;
