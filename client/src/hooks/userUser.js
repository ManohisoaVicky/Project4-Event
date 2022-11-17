import React from "react";
import { UserContext } from "../context/userContext";
import { logout, getUser } from "../utils/userService";
import { getUserFromToken } from "../utils/tokenService";

export default function useUser() {
  const [state, setState] = React.useContext(UserContext);

  const handleSignupOrLogin = () => {
    const freshUser = getUser();
    setState((state) => ({ ...state, user: freshUser }));
  };

  const handleLogOut = () => {
    logout();
    setState({ ...state, user: null });
  };

  const refreshAuth = () => {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("token")) {
      const user = getUserFromToken();
      return setState({ ...state, user });
    } else return false;
  };

  return {
    user: state.user,
    handleSignupOrLogin,
    handleLogOut,
    refreshAuth,
  };
}
