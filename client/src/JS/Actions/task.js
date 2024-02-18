// importation
import axios from "axios";
import {
  FAIL_TASK,
  LOAD_TASK,
  ONE_TASK,
  SUCC_TASK,
  DONE_TASK
} from "../ActionsTypes/task";

// get all tasks
export const getTasks = () => async (dispatch) => {
  dispatch({ type: LOAD_TASK });
  try {
    let result = await axios.get("api/task/all");
    dispatch({ type: SUCC_TASK, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TASK, payload: error.response });
  }
};

// add task

export const addTask = (newTask) => async (dispatch) => {
  try {
    await axios.post("api/task/add", newTask);
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: FAIL_TASK, payload: error.response });
  }
};

// delete task

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/task/${id}`);
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: FAIL_TASK, payload: error.response });
  }
};

// edit task

export const editTask = (id, newTask) => async (dispatch) => {
  try {
    await axios.put(`/api/task/${id}`, newTask);
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: FAIL_TASK, payload: error.response });
  }
};

// get one task

export const getTask = (id) =>  async (dispatch) =>{
  dispatch({ type: LOAD_TASK });
  try {
    let result = await axios.get(`/api/task/${id}`);
    dispatch({ type: ONE_TASK, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TASK, payload: error.response });
  }
};

// done task
export const doneTask = (id) => {
  return{
      type: DONE_TASK,
      payload: id
  }
}