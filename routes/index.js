const router = require("express").Router();

const students = require("./students");
const pokemons = require("./pokemons");

router.use("/students", students);
router.use("/pokemons", pokemons);

module.exports = router;
