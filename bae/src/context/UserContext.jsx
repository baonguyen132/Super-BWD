import React, { createContext, useReducer, useEffect } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

// Initial state for the user context
const initialState = null

// Action types for the user reducer
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// User reducer to manage user state
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case CLEAR_USER:
      // Xoá cookie khi logout
      Cookies.remove("API_USER");
      return null;
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  // Use useReducer to manage user state
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const userCookie = Cookies.get("API_USER");
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(userCookie));
        dispatch({ type: "SET_USER", data: parsedUser });
      } catch (e) {
        console.error("Invalid user cookie:", e);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
