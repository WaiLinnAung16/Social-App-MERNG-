import { jwtDecode } from "jwt-decode";
import { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

//  check token exist or not
if (localStorage.getItem("jwtToken")) {
  // if token exist check token vaildate with token exp
  const decodeToken = jwtDecode(localStorage.getItem("jwtToken"));

  /*
  Decoded token
  email: "123@gmail.com";
  exp: 1700977146;
  iat: 1700973546;
  id: "6562bfec6c06cadbde0aa35d";
  username: "dddd";
  */

  if (decodeToken * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
    console.log('remove')
  } else {
    initialState.user = decodeToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem("jwtToken", userData.token);
    dispatch({ type: "LOGIN", payload: userData });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    ></AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
