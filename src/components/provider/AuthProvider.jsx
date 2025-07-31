//hooks
import { useEffect, useState } from "react";

// Context
import AuthContext from "../../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const storedUser = localStorage.getItem("users");
      return storedUser ? JSON.parse(storedUser) : "";
    } catch (error) {
      console.error("Failed to parse stored user from local storage", error);
      return "";
    }
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUsers(userData);
  };

  const logout = () => {
    localStorage.removeItem("users");
    setUsers(null);
  };
  return (
    <AuthContext.Provider value={{ users, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
