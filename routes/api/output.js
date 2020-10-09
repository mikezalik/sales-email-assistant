const express = require("express");
const router = express.Router();

// Output Model import
const Output = require("../../models/Output");

// Get all outputs
// Public
router.get("/", (req, res) => {
  Output.find().then((outputs) => res.json(outputs));
});

// TEST Get specific test literature
// Public
router.get("/ccat", (req, res) => {
  Output.find({ test: "ccat" }).then((ccat) => res.json(ccat));
});

// Create an output
// Public
router.post("/", (req, res) => {
  const newOutput = new Output({
    output: req.body.output,
    test: req.body.test,
  });

  newOutput.save().then((output) => res.json(output));
});

// Delete an output
// Public

router.delete("/:id", (req, res) => {
  Output.findById(req.params.id)
    .then((output) => output.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
