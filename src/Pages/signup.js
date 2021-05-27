import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "../Components/Form/form";

export const Signup = () => {
  const history = useHistory();

  document.body.classList.add("background");

  const handleFormSubmit = async (e) => {
    document.body.classList.remove("background");
    history.push("/");
    console.log(e.target.username.value, e.target.password.value);

    const res = await fetch(
      "https://messaging-web-app.herokuapp.com/api/new-account",
      {
        method: "POST",
        body: JSON.stringify({
          username: "new_uname",
          password: "secure_password"
        })
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onFormSubmit={handleFormSubmit} validatePassword={true} />
      <hr />
      Already have an account? <Link to="/login">Log In</Link>
    </div>
  );
};
