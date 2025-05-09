// controllers/questionController.js
const Question = require("../models/Question");

exports.getQuestionsByTopic = async (req, res) => {
  const { topic, type } = req.params;
  const questions = await Question.find({ topic, type });
  res.json(questions);
};

exports.addQuestion = async (req, res) => {
  const newQ = new Question(req.body);
  await newQ.save();
  res.json({ message: "Question added" });
};
