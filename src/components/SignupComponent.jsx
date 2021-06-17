import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./css/signupComponent.css";
function SignupComponent({
  nameChangeHandler,
  passwordChangeHandler,
  emailChangeHandler,
  emailError,
  nameError,
  passwordError,
  onSubmitHandler,
  checkBoxHandler,
  checkBoxError,
  userNameChangeHandler,
  userNameError,
}) {
  return (
    <Card>
      <Card.Body>
        <Form>
          <center>
            <h2>Sign Up</h2>
          </center>
          <Form.Group className="mb-3">
            <Form.Label sm={2}>Name</Form.Label>

            <Form.Control
              placeholder="Enter Name"
              onChange={nameChangeHandler}
            />
            {nameError !== "" && <span className="error">{nameError}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label sm={2}>UserName</Form.Label>

            <Form.Control
              placeholder="Enter User Name"
              onChange={userNameChangeHandler}
            />
            {userNameError !== "" && (
              <span className="error">{userNameError}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label sm={2}>Email</Form.Label>

            <Form.Control
              type="email"
              placeholder="Email"
              onChange={emailChangeHandler}
            />
            {emailError !== "" && <span className="error">{emailError}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label sm={2}>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
            />
            {passwordError !== "" && (
              <span className="error">{passwordError}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              onClick={checkBoxHandler}
              label="Terms and Conditions"
            />

            {checkBoxError !== "" && (
              <span className="error">{checkBoxError}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Button onClick={onSubmitHandler} type="submit">
              Sign in
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignupComponent;
