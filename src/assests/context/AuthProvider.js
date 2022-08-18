import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        message,
        setMessage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
