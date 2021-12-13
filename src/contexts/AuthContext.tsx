import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthContextProps {
  user: User;
  googleSignIn(): Promise<void>;
};

interface AuthProviderProps {
  children: ReactNode,
};

interface AuthResponseProps {
  params: {
    access_token: string;
  };
  type: string;
};

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picture?: string;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({children}: AuthProviderProps ) => {
  const [user, setUser] = useState<User>({} as User);

  const googleSignIn = async () => {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  
      const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthResponseProps;
      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();
        setUser({
          id: userInfo.id,
          firstName: userInfo.given_name,
          lastName: userInfo.family_name,
          email: userInfo.email,
          picture: userInfo.picture,
        });
      }
    } catch(error) {
      throw new Error (error);
    }
  };

  return(
    <AuthContext.Provider value={{user, googleSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export {
  AuthProvider,
  useAuth,
};
