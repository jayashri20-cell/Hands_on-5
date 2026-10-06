import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function getRegisteredUsers() {
  const users = localStorage.getItem("placementUsers");

  if (!users) {
    return [];
  }

  return JSON.parse(users);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    if (loggedInUser) {
      return JSON.parse(loggedInUser);
    }

    return null;
  });

  // REGISTER
  function registerUser(newUser) {
    const users = getRegisteredUsers();

    const emailExists = users.some(
      (registeredUser) =>
        registeredUser.email.toLowerCase() ===
        newUser.email.toLowerCase()
    );

    if (emailExists) {
      return {
        success: false,
        message: "This email is already registered.",
      };
    }

    users.push(newUser);

    localStorage.setItem(
      "placementUsers",
      JSON.stringify(users)
    );

    return {
      success: true,
      message: "Registration successful!",
    };
  }

  // LOGIN
  function login(email, password) {
    const users = getRegisteredUsers();

    const registeredUser = users.find(
      (registeredUser) =>
        registeredUser.email.toLowerCase() ===
        email.toLowerCase()
    );

    // BOTH EMAIL AND PASSWORD MUST BE CORRECT
    if (
      !registeredUser ||
      registeredUser.password !== password
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const loggedInUser = {
      name: registeredUser.name,
      email: registeredUser.email,
      course: registeredUser.course,
    };

    setUser(loggedInUser);

    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify(loggedInUser)
    );

    return {
      success: true,
      message: "Login successful!",
    };
  }

  // LOGOUT
  function logout() {
    setUser(null);
    sessionStorage.removeItem("loggedInUser");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}