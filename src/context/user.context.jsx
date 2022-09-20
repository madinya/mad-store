import { useState, createContext, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
// Actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrrentUser(user);
    });
    return unsuscribe;
  }, []);
  const [currentUser, setCurrrentUser] = useState(null);
  const value = { currentUser, setCurrrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
