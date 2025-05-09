// routes/questionRoutes.js
const express = require("express");
const router = express.Router();
const { getQuestionsByTopic, addQuestion } = require("../controllers/questionController");

router.get("/:topic/:type", getQuestionsByTopic);
router.post("/", addQuestion);

module.exports = router;
