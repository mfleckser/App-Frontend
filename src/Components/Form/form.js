import React from "react";

export const Form = ({ onFormSubmit, validatePassword }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(e);
  };

  return (
    <div id="login-form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="text-input"
          placeholder={"Username"}
          name="username"
          required
        ></input>
        <input
          type="password"
          className="text-input"
          placeholder={"Password"}
          name="password"
          required
        ></input>
        {validatePassword && (
          <input
            type="password"
            className="text-input"
            placeholder={"Confirm Password"}
            name="confirm_password"
            required
          ></input>
        )}
        <input type="submit" value="Enter" className={"submit-btn"}></input>
      </form>
    </div>
  );
};
