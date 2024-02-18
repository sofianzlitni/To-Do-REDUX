import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../JS/Actions/task";
import Edit from "../Edit/Edit";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task-container">
      <span className={task.isDone ? "done" : null}>{task.task}</span>
      <Edit task={task} />
      <Button
        variant="danger"
        onClick={() => dispatch(deleteTask(task._id))}
      >
        DELETE
      </Button>
      <Button
        variant="warning"
        onClick={() => dispatch(doneTask(task._id))}
      >
        {task.isDone ? "UnDone" : "Done"}
      </Button>
    </div>
  );
};
 
export default Task