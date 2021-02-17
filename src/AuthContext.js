import React, { createContext, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const userToken = cookies.get("token");
  const id = cookies.get("id");
  const [authToken, setAuthToken] = useState(userToken);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(id);

  const setCookieOrError = (res) => {
    const { success, token, id } = res.data;
    //console.log(success, token);
    console.log(id);

    if (success) {
      cookies.set("token", token);
      setAuthToken(token);
      cookies.set("id", id);
      setUserId(id);
    } else {
      setError(true);
    }
  };

  const login = ({ email, password }) => {
    axios
      .post("http://localhost:5000/auth/login", { email, password })
      .then((res) => setCookieOrError(res))
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  const register = ({ email, username, password }) => {
    axios
      .post("http://localhost:5000/auth/register", {
        email,
        password,
        username,
      })
      .then((res) => setCookieOrError(res))
      .catch((e) => setError(true));
  };

  const logout = () => {
    cookies.remove("token");
    setAuthToken("");
  };

  const isLoggedIn = () => {
    return authToken ? true : false;
  };

  return (
    <AuthContext.Provider
      value={{
        authError: error,
        isLoggedIn,
        login,
        register,
        logout,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
