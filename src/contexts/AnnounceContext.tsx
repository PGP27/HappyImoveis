import React, { createContext, useContext, useState } from 'react';

const AnnounceContext = createContext({} as any);

const AnnounceProvider = ({children}) => {
  const [announce, setAnnounce] = useState({});

  return(
    <AnnounceContext.Provider value={{announce, setAnnounce}}>
      {children}
    </AnnounceContext.Provider>
  );
};

const useAnnounce = () => {
  const context = useContext(AnnounceContext);
  return context;
};

export {
  AnnounceProvider,
  useAnnounce,
};
