import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
function UserDetailsComponent({ user }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://lh3.googleusercontent.com/proxy/ofWV2xSGfFEkOmpCs1jrITogaeJ4luhZ_GDi32SN_TT83OfiFOoEy4dqxchAIYGGbkjSX3YHvnhc9KC_939CU0IRCrekrGaZpsVckj2mVnhhON1-29mQ"
        />
        <Card.Body>
          <Card.Text>Full Name - {user.full_name}</Card.Text>
          <Card.Text>Email - {user.email}</Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroupItem>User Name - {user.username}</ListGroupItem>
            <ListGroupItem>Date Joined - {user.date_joined}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDetailsComponent;
