const express = require("express");
const { authMiddleware, checkRole } = require("../middleware/authMiddleware");
const Task = require("../models/Task");

const router = express.Router();

// Get User's Tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

// Create Task
router.post("/", authMiddleware, async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const task = new Task({ title, user: req.user });
  await task.save();
  res.status(201).json(task);
});

// Delete Task
router.delete(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.deleteOne();
    res.status(204).send();
  }
);

module.exports = router;
