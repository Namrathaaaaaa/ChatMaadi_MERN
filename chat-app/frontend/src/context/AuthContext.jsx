import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      
      // Validate structure (optional, adjust based on your use case)
      if (parsedUser && typeof parsedUser._id === "string") {
        return parsedUser;
      } else {
        return null; // Invalid structure, treat as no user
      }
    } catch (error) {
      console.error("Error parsing chat-user from localStorage:", error);
      return null; // Fallback to null on error
    }
  });

  const updateAuthUser = (user) => {
    if (user) {
      localStorage.setItem("chat-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("chat-user");
    }
    setAuthUser(user);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser: updateAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
