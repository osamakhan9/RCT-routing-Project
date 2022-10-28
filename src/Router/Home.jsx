import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Home() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <div>
        <h1>home</h1>
        <p>before enter to user page you need to Login</p>
      </div>
      <button onClick={toggleAuth}>Login</button>
    </>
  );
}

export default Home;
