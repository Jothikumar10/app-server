const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/register", adminController.adminRegister);
router.post("/login", adminController.adminLogin);

router.get("/dashboard", adminController.dashboard);

router.get("/users", adminController.getUsers);

router.delete("/users/:id", adminController.deleteUser);

router.get("/analytics", adminController.analytics);

module.exports = router;