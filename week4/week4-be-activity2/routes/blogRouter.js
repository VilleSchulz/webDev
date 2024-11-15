const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
}=require("../controllers/blogControllers")


//Get /blogs
router.get("/", getAllBlogs);

// POST /blogs

router.post("/", createBlog);
// GET /blogs/:blogId
router.get("/:carId", getBlogById);

// PUT /blogs/:blogId
router.put("/:carId", updateBlog);

// DELETE /blogs/blogId
router.delete("/:carId", deleteBlog);



module.exports = router;