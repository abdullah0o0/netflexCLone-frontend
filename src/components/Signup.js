import React from "react";

export default function Signup(props) {
  const signupForm = (e) => {
    e.preventDefault();

    const user = {
      firstname: e.target.elements["firstname"].value,
      lastname: e.target.elements["lastname"].value,
      email: e.target.elements["email"].value,
      password: e.target.elements["password"].value,
    };
    // sending post request to express-server
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.data);
          props.history.push("/login");
        } else {
          console.log(result.message);
        }
      });
  };
  return (
    <>
      <form onSubmit={signupForm}>
        <label>
          First Name:{" "}
          <input type="text" name="firstname" placeholder="Enter First Name" />
        </label>
        <br />
        <label>
          Last Name:{" "}
          <input type="text" name="lastname" placeholder="Enter Last Name" />
        </label>
        <br />
        <label>
          Email: <input type="email" name="email" placeholder="Enter Email" />
        </label>
        <br />
        <label>
          Password:{" "}
          <input type="password" name="password" placeholder="Enter Password" />
          <br />
          <button type="submit">Signup</button>
        </label>
      </form>
    </>
  );
}
