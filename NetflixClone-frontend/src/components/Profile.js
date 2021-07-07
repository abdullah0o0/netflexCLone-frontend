import React, { useContext } from "react";
import MyContext from "../MyContext";
import "../assets/Profile.scss";

export default function Profile() {
  const { user } = useContext(MyContext);
  // const { __v, _id, email, firstname, fullname, id, lastname, password } = user;
  console.log(user);
  return (
    <div className="page">
      <div className="profileInfo">
        <label>
          Username:<span> </span>
        </label>
        <label>
          Email:
          <span> </span>
        </label>
        <label>
          User ID:<span></span>
        </label>
      </div>
    </div>
  );
}
