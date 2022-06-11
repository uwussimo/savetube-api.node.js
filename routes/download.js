const { downloadFromYouTube } = require("../controllers/");

// router download from youtube
const router = require("express").Router();

router.post("/yt/", downloadFromYouTube);

router.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to the download API",
    options: {
      YouTube: {
        url: "http://localhost:3000/download/yt/",
        method: "POST",
        options: {
          url: "YouTube video link (any format)",
        },
      },
    },
  });
});

module.exports = router;
