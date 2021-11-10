import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/Autprovider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
