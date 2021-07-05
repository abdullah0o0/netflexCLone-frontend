import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import "../assets/Profile.scss";

export default function Profile() {
  const { user } = useContext(MyContext);
  const { __v, _id, email, firstname, fullname, id, lastname, password } = user;

  return (
    <div className="page">
      <div className="profileInfo">
        <label>
          Username:<span> {fullname}</span>
        </label>
        <label>
          Email:
          <span> {email}</span>
        </label>
        <label>
          User ID:<span> {id}</span>
        </label>
      </div>
    </div>
  );
}
