import { createContext, useContext, useState } from "react";
export const LoginContext = createContext();
export function useLoginContext() {
  return useContext(LoginContext);
}

const LoginContextProvider = ({ children }) => {
  const [loginModel, setLoginModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);
  return (
    <LoginContext.Provider
      value={{ loginModel, setLoginModel, signupModel, setSignupModel }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
