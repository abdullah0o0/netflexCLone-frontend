import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Login(props) {
  const { setUser, setIsLogin } = useContext(MyContext);

  const loginForm = (e) => {
    e.preventDefault();
    let user = {
      email: e.target.elements["email"].value,
      password: e.target.elements["password"].value,
    };

    // sending post request on /users/login
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        let token = res.headers.get("x-auth");
        localStorage.setItem("x-auth", token);
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          console.log(result.data);
          setUser(result.data);
          setIsLogin(true);
          props.history.push("/movies");
        } else {
          console.log(result.message);
        }
      });
  };
  return (
    <>
      <form onSubmit={loginForm}>
        <label>
          Email: <input type="email" name="email" placeholder="Enter Email" />
        </label>
        <br />
        <label>
          Password:{" "}
          <input type="password" name="password" placeholder="Enter Password" />
          <br />
          <button type="submit">Login</button>
        </label>
      </form>
    </>
  );
}
