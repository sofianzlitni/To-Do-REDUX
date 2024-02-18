import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/task";
import { Button, Form } from "react-bootstrap";
import "./AddTask.css";

const AddTask = () => {
    const [newTask, setNewTask] = useState({task: ""});
  const dispatch = useDispatch();
  const handleChange = (e) => {
     setNewTask({...newTask, [e.target.name]: e.target.value});
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTask) {
      dispatch(addTask(newTask));
    } else {
      alert("can not add an empty text !");
    }
  };
  return (
    <Form onSubmit={handleAdd} className="add-task-container">
      <Form.Control
      name="task"
        className="input-task"
        type="text"
        placeholder="Enter Task Title..."
        onChange={handleChange}
        value={newTask.task}
        
      />
      <Button className="adding" variant="success" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
};

export default AddTask;
