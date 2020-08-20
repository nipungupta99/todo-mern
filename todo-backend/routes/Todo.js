const router = require("express").Router();
const {
  findAll,
  add,
  findOne,
  deleteOne,
  updateOne,
} = require("../controllers/Todo");
const Todos = require("../models/Todo");

router.get("/", findAll);

router.post("/", add);

router.get("/:id", findOne);

router.delete("/:id", deleteOne);

router.patch("/:id", updateOne);

module.exports = router;
