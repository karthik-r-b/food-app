import React from 'react';
import './login.css';
const Login = () => {
  return (
    <div className="border-ex">
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
        </div>
        <br />
        <button className="w-100 btn btn-lg btn-danger" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
