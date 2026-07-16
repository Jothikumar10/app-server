const express=require("express");

const router=express.Router();

const admin=require("../controllers/adminController");

const adminMiddleware=require("../middleware/adminMiddleware");

router.get(
"/dashboard",
adminMiddleware,
admin.dashboard
);

router.get(
"/users",
adminMiddleware,
admin.getUsers
);

router.delete(
"/users/:id",
adminMiddleware,
admin.deleteUser
);

router.get(
"/analytics",
adminMiddleware,
admin.analytics
);

module.exports=router;