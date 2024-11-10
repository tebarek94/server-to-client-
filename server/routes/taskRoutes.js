// server/routes/taskRoutes.js
const express = require("express");
const taskController = require("../controllers/taskController");
const jwtMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", jwtMiddleware.verifyToken, taskController.getTasks);
router.post("/", jwtMiddleware.verifyToken, taskController.createTask);
router.put("/:id", jwtMiddleware.verifyToken, taskController.updateTask);
router.delete("/:id", jwtMiddleware.verifyToken, taskController.deleteTask);

module.exports = router;
