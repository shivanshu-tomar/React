import React from "react";
import { Form } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

function LoginComponent({
  emailChangeHandler,
  passwordChangeHandler,
  onClickHandler,
  emailError,
  passError,
}) {
  return (
    <Card className="login-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <Form.Control
              onChange={emailChangeHandler}
              type="email"
              placeholder="Enter user name"
            />
            {emailError !== "" && <span className="error">{emailError}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Password"
            />
            {passError !== "" && <span className="error">{passError}</span>}
          </Form.Group>
          <div>
            Not have account ? <a href="/signup">create</a>
          </div>

          <Button onClick={onClickHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginComponent;
