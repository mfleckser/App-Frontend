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
        ></input>
        <input
          type="password"
          className="text-input"
          placeholder={"Password"}
          name="password"
        ></input>
        {validatePassword && (
          <input
            type="password"
            className="text-input"
            placeholder={"Confirm Password"}
            name="confirm-password"
          ></input>
        )}
        <input type="submit" value="Enter" className={"submit-btn"}></input>
      </form>
    </div>
  );
};
