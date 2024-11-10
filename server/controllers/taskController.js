// server/controllers/taskController.js
const db = require("../config/db");

// Get all tasks for the user
exports.getTasks = (req, res) => {
  const userId = req.user.id;

  const query = "SELECT * FROM tasks WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching tasks" });
    }
    res.json(results);
  });
};

// Create a task
exports.createTask = (req, res) => {
  const { title, description, due_date, status } = req.body;
  const userId = req.user.id;

  const query =
    "INSERT INTO tasks (title, description, due_date, status, user_id) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [title, description, due_date, status, userId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error creating task" });
      }
      res.status(201).json({ message: "Task created successfully" });
    }
  );
};

// Update task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status } = req.body;

  const query =
    "UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?";
  db.query(
    query,
    [title, description, due_date, status, id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error updating task" });
      }
      res.json({ message: "Task updated successfully" });
    }
  );
};

// Delete task
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM tasks WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error deleting task" });
    }
    res.json({ message: "Task deleted successfully" });
  });
};
