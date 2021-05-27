import React from "react";
import { useHistory, Link } from "react-router-dom";

import { Form } from "../Components/Form/form";

export const Login = () => {
  const history = useHistory();

  document.body.classList.add("background");

  const handleFormSubmit = (e) => {
    document.body.classList.remove("background");
    history.push("/");
    console.log(e.target.username.value, e.target.password.value);
  };

  return (
    <div>
      <h1>Log In</h1>
      <Form onFormSubmit={handleFormSubmit} validatePassword={false} />
      <hr />
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </div>
  );
};
