import React, { createContext, useContext, useState } from 'react';

interface SurveyContextData {
  initialComponent: boolean;
  changeInitialComponent(): void;
  searchFounded: boolean;
  changeSearchFounded(): void;
  loadingCarrierData: boolean;
  changeLoadingCarrierData(): void;
}
const SurveyContext = createContext<SurveyContextData>({} as SurveyContextData);

export const Survey: React.FC = ({ children }) => {
  const [initialComponent, setInitialComponent] = useState(true);
  const [searchFounded, setSearchFounded] = useState(false);
  const [loadingCarrierData, setLoadingCarrierData] = useState(false);

  const changeInitialComponent = () => {
    setInitialComponent(!initialComponent);
  };

  const changeSearchFounded = () => {
    setSearchFounded(!searchFounded);
  };

  const changeLoadingCarrierData = () => {
    setLoadingCarrierData(!loadingCarrierData);
  };

  return (
    <SurveyContext.Provider
      value={{
        initialComponent,
        changeInitialComponent,
        searchFounded,
        changeSearchFounded,
        loadingCarrierData,
        changeLoadingCarrierData,
      }}>
      {children}
    </SurveyContext.Provider>
  );
};

export function useSurveyContext(): SurveyContextData {
  const context = useContext(SurveyContext);

  if (!context) {
    throw new Error('useContext a Survey must be used');
  }

  return context;
}
