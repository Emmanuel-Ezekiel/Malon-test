import React, { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Col
} from "reactstrap";


export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  const Delete = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  // } ,[])



  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex" key={user.id}>
             <Col>
              <strong>{user.name}</strong>
              <div></div>
              <strong>{user.body}</strong>
              </Col>

              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => {removeUser(user.id)}} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>
  )
}
