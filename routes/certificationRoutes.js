const express = require("express");
const router = express.Router();

const controller = require("../controllers/certificationController");

router.get("/", controller.getCertifications);

router.post("/", controller.createCertification);

router.delete("/:id", controller.deleteCertification);

module.exports = router;