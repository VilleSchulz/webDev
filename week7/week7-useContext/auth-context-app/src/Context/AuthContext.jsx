import { createContext, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const storedJwt = sessionStorage.getItem("jwt");
    if (storedJwt) {
      setIsLoggedIn(true);
      setToken(storedJwt);
    }
    setIsloading(true);
  }, []);

  const login = (jwtToken) => {
    setIsLoggedIn(true);
    setToken(jwtToken);
    sessionStorage.setItem("jwt", token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    sessionStorage.removeItem("jwt");
  };

  const authValue = {
    isLoggedIn,
    isLoading,
    token,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
