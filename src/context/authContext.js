import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
    login : () => {},
    token : null,
    logout : () => {},

});

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);

  const login = () => {
    setToken('loggedIn');
  };
  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{login : login, logout : logout, token : token}}>
      {children}
    </AuthContext.Provider>
  );
};
