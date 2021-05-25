import React from 'react';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return <>{children}</>;
};

export default AppProvider;
