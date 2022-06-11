const router = require("express").Router();

router.use("/download", require("./download"));

router.get("*", (req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: "Page not found",
  });
});

module.exports = router;
