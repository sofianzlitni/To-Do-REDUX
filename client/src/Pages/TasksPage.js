import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, getTasks } from "../JS/Actions/task";
import AddTask from "../Components/AddTask/AddTask";
import '../Pages/TasksPage.css'
import ListTask from "../Components/ListTask/ListTask";


const TaskPage = () => {
  const load = useSelector((state) => state.taskReducer.load);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      <h1> My To-Do List</h1>
            <AddTask/>
            
          {load ? <h2>Loading...</h2> : <ListTask/>}
          
    </div>
  );
};

export default TaskPage;
