const express = require("express");
const app = express();
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask
} = require("../controllers/controllers")

router.route("/").get(getAllTasks).post(createTask);
router("/:id").get(getTask).patch(updateTask);

module.exports = router;