import React from 'react';
import { Api } from './api';

import { AuthUser } from './auth';

import useCachedResources from './useCachedResources';

const AppProvider: React.FC = ({ children }) => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <AuthUser>
      <Api>{children}</Api>
    </AuthUser>
  );
};

export default AppProvider;
