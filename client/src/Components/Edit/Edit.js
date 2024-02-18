import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editTask, getTask } from "../../JS/Actions/task";
import { useMatch, useParams } from "react-router-dom";
import { ONE_TASK } from "../../JS/ActionsTypes/task";

const Edit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState({ task: "" });
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };



  const handleEdit = () => {
    dispatch(editTask(task._id, newTask));
    handleClose();
  };

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        EDIT
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change the Task</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <input
          name="task"
            placeholder={`${task.task}`}
            value={newTask.task}
            onChange={handleChange}
          />
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Edit;
