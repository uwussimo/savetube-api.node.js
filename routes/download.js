const router = require("express").Router();
const { downloadFromYouTube, downloadFromTiktok } = require("../controllers/");

router.post("/yt/", downloadFromYouTube);
router.post("/tt/", downloadFromTiktok);

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
