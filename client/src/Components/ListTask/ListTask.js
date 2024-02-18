import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { Button } from 'react-bootstrap';
import "./ListTask.css"

const ListTask = () => {
  const [status,setStatus] = useState('All');
  const list = useSelector((state)=> state.taskReducer.allTasks);

  return (
    <div className='prime-btns'>
      <Button variant='dark' onClick={()=> setStatus('All')}>
        All
      </Button>
      <Button variant='danger' onClick={()=> setStatus('Done')}>
        Done
      </Button>
      <Button variant='warning' onClick={()=> setStatus('Undone')}>
        Undone
      </Button>

      {status ==="Done"
      ? list
      .filter((el) => el.isDone === true)
      .map((el) => <Task task={el} key={el.id}/>)
      : status === "Undone"
      ? list
      .filter((el) => el.isDone === false)
      .map((el) => <Task task={el} key={el.id}/>)
     : list.map((el) => <Task task={el} key={el.id}/>)}
    </div>
  )
}

export default ListTask