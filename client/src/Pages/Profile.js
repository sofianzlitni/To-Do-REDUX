import React from 'react';
import { useSelector } from 'react-redux';
import {Card, Button} from 'react-bootstrap';

const Profile = () => {
    const user = useSelector((state)=> state.userReducer.user)
    return <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
      <Card.Body>
        <Card.Title>Welcome {user && user.firstname}</Card.Title>
        <Button variant="danger" href='/tasks'>My Tasks</Button>
      </Card.Body>
    </Card>
    </div>
  
}

export default Profile