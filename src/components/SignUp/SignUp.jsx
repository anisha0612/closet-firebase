import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({});
  };

  return (
    <div className='Sign center-align'>
      <h3 className='title'>Don't Have an Account?</h3>
      <p className='subtitle'>Sign Up with your email and password</p>
      <Form>
        <Form.Group controlId='Email'>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type='text'
            className='input'
            placeholder='Enter Name'
            id='displayName'
            name='name'
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='Email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email Address'
            className='input'
            id='emailUp'
            name='email'
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='Password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='input'
            placeholder='Password'
            id='passwordIn'
            name='password'
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='ConfirmPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='input'
            placeholder='Confirm Password'
            id='confirmPassword'
            name='confirmPassword'
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className='mr-2 button'
          variant='outline-light'
          onSubmit={handleSubmit}
          type='submit'>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
