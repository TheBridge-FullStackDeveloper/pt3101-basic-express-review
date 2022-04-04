const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.info("> query: ", req.query);

  res.status(200).json({
    success: true,
  });
});

module.exports = router;
