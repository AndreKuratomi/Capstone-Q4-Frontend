import { createContext, useContext, useEffect, useState } from "react";
import { NavigateFunction } from "react-router";
import api from "../../services/api";
import { AuthProviderProps, Decoded, AuthProviderData } from "./types";
import { LoginProps } from "../../components/formLogin/types";
import jwt_decode from "jwt-decode";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieDoc:token") || ""
  );
  const signin = async (data: LoginProps, navigate: NavigateFunction) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@kenzieDoc:token", res.data.token);
        setToken(res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err, "erro"));
  };

  useEffect(() => {
    if (token) {
      setUser(jwt_decode<Decoded>(token));
    }
  }, [token]);
  return (
    <AuthContext.Provider value={{ signin, token, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
