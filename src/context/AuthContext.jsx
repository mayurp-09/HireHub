import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState( () => {
    const savedUser = localStorage.getItem("jobPortalUser");
    return savedUser ? JSON.parse(savedUser) : null;
  })

  const [applications, setApplications] = useState(() => {
    const savedAppli = localStorage.getItem("userApplications");
    return savedAppli ? JSON.parse(savedAppli) : [] ;
  })

  const applyToJob = (job) => {
    setApplications((prev) => {
      const isAlreadyApplied = prev.find((items) => items.id === job.id);
      if (isAlreadyApplied) return prev;

      const updatedApps = [...prev, job];
      localStorage.setItem("userApplications", JSON.stringify(updatedApps))
      return updatedApps;
    })
  }

  const login = (username) => {
    const userData = { name: username };
    setUser(userData);
    localStorage.setItem("jobPortalUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jobPortalUser")
    localStorage.removeItem("userApplications")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, applications, applyToJob }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); //custom hook