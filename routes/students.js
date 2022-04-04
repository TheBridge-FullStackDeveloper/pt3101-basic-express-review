const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      name: "Morbius",
      age: 33,
    },
  });
});

router.post("/", (req, res, next) => {
  console.info("> body: ", req.body);

  res.status(200).json({
    success: true,
  });
});

router.get("/:name", (req, res, next) => {
  const { name } = req.params;

  res.status(200).json({
    success: true,
    data: {
      name,
    },
  });
});

module.exports = router;
