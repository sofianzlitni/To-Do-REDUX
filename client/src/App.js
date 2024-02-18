import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import TasksPage from './Pages/TasksPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/Actions/user';

function App() {
  const dispatch = useDispatch();

useEffect(()=> {
  if (localStorage.getItem("token")) {
    dispatch(current());
  }
}, [dispatch]);
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
