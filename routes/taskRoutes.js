const express = require("express");
const { body } = require("express-validator");

const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const router = express.Router();


// Create Task
router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters"),
  ],
  createTask
);


// Get Tasks
router.get("/", getTasks);


// Update Task Status
router.patch("/:id", updateTaskStatus);

module.exports = router;