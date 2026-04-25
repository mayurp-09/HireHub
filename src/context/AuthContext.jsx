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

  const [savedJobs, setSavedJobs] = useState(() => {
    const localSaved = localStorage.getItem("savedJobs");
    return localSaved ? JSON.parse(localSaved) : [];
  })
  
  const toggleSaveJob = (job) => {
    setSavedJobs((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const isAlreadySaved = safePrev.some((item) => String(item.id) === String(job.id));
      let updatedList;
      if (isAlreadySaved) {
        // If it exists, remove it (Unsave)
        updatedList = safePrev.filter((item) => String(item.id) !== String(job.id));
      } else {
        // If it doesn't exist, add it (Save)
        updatedList = [...safePrev, job];
      }

      // Save to storage immediately
      localStorage.setItem("savedJobs", JSON.stringify(updatedList));
      return updatedList;
    
    });
  }


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
    localStorage.removeItems("savedJobs")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, applications, applyToJob, savedJobs, toggleSaveJob }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); //custom hook