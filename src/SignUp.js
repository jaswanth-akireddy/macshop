import React from 'react';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <h1 className="form-title">Sign Up</h1>
        <div className="input-container">
          <label>Username</label>
          <input type="text" className="form-input" />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="email" className="form-input" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" className="form-input" />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input type="password" className="form-input" />
        </div>
        <button className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
