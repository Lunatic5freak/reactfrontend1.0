import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { BrowserRouter, Route,Link } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Signup from '../register/register'
export default function Login({ setToken }) {
  const [user, setUser] = useState({
    userid: "",
    password: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    let axiosinstance = new axios.create({});
    axiosinstance.post("https://moleculerbackend.herokuapp.com/user/login", user).then((res) => {
        console.log(res.data)
      if (res.data.role === "admin" || res.data.role === "user") {
        localStorage.setItem('email',res.data.email)
        setToken(res.data);
      } else {
        alert(res.data.msg);
        window.location.reload();
      }
    });
  };
  return (
    <BrowserRouter>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Userid</Form.Label>
          <Form.Control
            type="text"
            name="userid"
            value={user.userid}
            placeholder="enter userid"
            onChange={handleInputs}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Userid</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            placeholder="enter password"
            onChange={handleInputs}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>Login</Button>
      </Form>
      <h3>dont have an account?<Link to='/signup'>Sign Up</Link></h3>

      <Switch>
        <Route path="/signup" exact component={Signup}></Route>
      </Switch>

    </BrowserRouter>
  );
}
Login.propTypes={
    setToken:PropTypes.func.isRequired
}
