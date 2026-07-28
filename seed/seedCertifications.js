/**
 * Run once to populate your DB with the same categories used in the
 * original GetCertifiedMenu.jsx hardcoded array:
 *
 *   node server/seed/seedCertifications.js
 *
 * Run this from wherever your .env file (with MONGO_URI) actually lives —
 * if .env is inside server/, run it from there; if it's at the project
 * root, run it from the root instead. dotenv only looks in the current
 * working directory by default.
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Certification = require("../models/Certification");

const seedData = [
  {
    title: "Exam Vouchers",
    items: [
      {
        name: "AWS Certifications",
        children: [
          "AWS Certification Exam Vouchers",
          "AWS Associate",
          "AWS Professional",
        ],
      },
      {
        name: "Microsoft Certifications",
        children: ["AZ-900", "AZ-104", "AZ-204", "Azure Exam Vouchers"],
      },
      {
        name: "Google Cloud",
        children: ["Cloud Digital Leader", "Associate Cloud Engineer"],
      },
      {
        name: "Cisco Certifications",
        children: ["CCNA", "CCNP", "Cisco Exam Vouchers"],
      },
      {
        name: "CompTIA",
        children: ["A+", "Network+", "Security+"],
      },
    ],
  },
  {
    title: "Popular Subjects",
    items: [
      { name: "Cloud", children: ["AWS", "Azure", "Google Cloud"] },
      {
        name: "Cyber Security",
        children: ["Ethical Hacking", "SOC", "Pen Testing"],
      },
      { name: "Networking", children: ["CCNA", "CCNP", "Linux"] },
    ],
  },
];

async function seed() {
  if (!process.env.MONGO_URI) {
    throw new Error(
      "MONGO_URI is not set. Make sure you're running this command from the folder that contains your .env file."
    );
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await Certification.deleteMany({});
  await Certification.insertMany(seedData);

  console.log(`Seeded ${seedData.length} categories`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});