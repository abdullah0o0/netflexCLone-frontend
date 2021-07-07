import React, { useState } from "react";
import MyContext from "../MyContext";

export default function Container(props) {
  const [user, setUser] = useState("empty");
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
        isRegistered,
        setIsRegistered,
        userEmail,
        setUserEmail,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
