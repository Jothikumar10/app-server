const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/register", adminController.adminRegister);
router.post("/login", adminController.adminLogin);

router.get("/dashboard", adminMiddleware, adminController.dashboard);

router.get("/users", adminMiddleware, adminController.getUsers);

router.delete("/users/:id", adminMiddleware, adminController.deleteUser);

router.get("/analytics", adminMiddleware, adminController.analytics);

module.exports = router;