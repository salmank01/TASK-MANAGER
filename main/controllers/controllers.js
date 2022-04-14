const express = require("express");
const app = express();
const asyncWrapper = require("../middlewares/async-wrapper");
const Task = require("../models/model");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOne({ _id: TaskID });
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body);
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
};
