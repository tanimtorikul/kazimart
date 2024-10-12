import { useContext } from "react";
import { AuthContext } from "../providers/authprovider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;