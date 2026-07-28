const Certification = require("../models/Certification");

// Get all certifications
exports.getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find();

    res.status(200).json({
      success: true,
      certifications,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Add certification
exports.createCertification = async (req, res) => {
  try {
    const certification = await Certification.create(req.body);

    res.status(201).json({
      success: true,
      certification,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete certification
exports.deleteCertification = async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Certification deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};