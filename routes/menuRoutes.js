const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    featured: [
      {
        _id: "1",
        title: "New Courses"
      },
      {
        _id: "2",
        title: "Most Popular"
      },
      {
        _id: "3",
        title: "Trending Skills"
      },
      {
        _id: "4",
        title: "Career Accelerators"
      }
    ],

    categories: [
      {
        _id: "101",
        name: "Development",
        subcategories: [
          { _id: "1", name: "Web Development" },
          { _id: "2", name: "Mobile Development" },
          { _id: "3", name: "Game Development" },
          { _id: "4", name: "Programming Languages" }
        ]
      },

      {
        _id: "102",
        name: "Business",
        subcategories: [
          { _id: "5", name: "Entrepreneurship" },
          { _id: "6", name: "Communication" },
          { _id: "7", name: "Management" },
          { _id: "8", name: "Sales" }
        ]
      },

      {
        _id: "103",
        name: "IT & Software",
        subcategories: [
          { _id: "9", name: "AWS" },
          { _id: "10", name: "Azure" },
          { _id: "11", name: "Docker" },
          { _id: "12", name: "Linux" }
        ]
      },

      {
        _id: "104",
        name: "Design",
        subcategories: [
          { _id: "13", name: "UI Design" },
          { _id: "14", name: "UX Design" },
          { _id: "15", name: "Photoshop" },
          { _id: "16", name: "Figma" }
        ]
      },

      {
        _id: "105",
        name: "Marketing",
        subcategories: [
          { _id: "17", name: "Digital Marketing" },
          { _id: "18", name: "SEO" },
          { _id: "19", name: "Google Ads" },
          { _id: "20", name: "Social Media Marketing" }
        ]
      }
    ]
  });
});

module.exports = router;