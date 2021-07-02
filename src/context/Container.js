import React, { useState } from "react";
import MyContext from "./MyContext";

export default function Container(props) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
        isRegistered,
        setIsRegistered
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
