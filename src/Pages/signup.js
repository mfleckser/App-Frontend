import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "../Components/Form/form";
import { Error } from "../Components/Error/error"

export const Signup = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  document.body.classList.add("background");

  const handleFormSubmit = async (e) => {
    if(e.target.password.value !== e.target.confirm_password.value) {
      setErrorMessage("Passwords do not match.")
      setShowError(true);
      return null;
    }

    const res = await fetch(
      "https://messaging-web-app-api.herokuapp.com/api/new-account",
      {
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value
        })
      }
    );
    const data = await res.json();
    if (data.status === "201") {
      history.push("/");
      document.body.classList.remove("background");
    } else {
      setErrorMessage(data.message);
      setShowError(true);
    }
    console.log(data);
  };

  const closeError = () => {
    setShowError(false);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      {showError && <Error message={errorMessage} onBtnClick={closeError} />}
      <Form onFormSubmit={handleFormSubmit} validatePassword={true} />
      <hr />
      Already have an account? <Link to="/login">Log In</Link>
    </div>
  );
};
