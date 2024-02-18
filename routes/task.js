const express = require("express");
const Task = require("../models/Task");


const router = express.Router();

// add task
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({
      task: req.body.task
    });
    await newTask.save();
    res.status(200).send({ msg: "Task Added Successfully ...", newTask });
  } catch (error) {
    res.status(400).send({ msg: "Can Not Add Task !!!", error });
  }
});

// get all tasks

router.get("/all", async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).send({ msg: "This is the list of all tasks...", allTasks });
  } catch (error) {
    res.status(400).send({ msg: "Can Not get all tasks !!!", error });
  }
});

// get one task

router.get("/:id", async (req, res) => {
  try {
    const oneTask = await Task.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "this is the task...", oneTask });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not get the task with this id !!!", error });
  }
});

// delete task
router.delete("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Task.findOneAndDelete({_id});
    res.status(200).send({ msg: "Task Deleted..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not delete the task with this id !!!", error });
  }
});

// edit task

router.put("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Task.findByIdAndUpdate({_id}, { $set: { ...req.body }})
    res.status(200).send({ msg: "Task updated..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not update the task with this id !!!", error });
  }
});

module.exports = router;
