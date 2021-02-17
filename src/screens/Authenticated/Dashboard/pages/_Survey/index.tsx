import React from 'react';
import { Survey as Context, useSurveyContext } from './context';
import CarrierData from './carrierData';
import CreateVehicle from './createVehicle';
import FindCNPJ from './findCnpj';
import SearchPlateForm from './searchPlateForm';

import { SurveyContainer } from './styles';
import SubmitSurvey from './submitSurvey';

const _Survey: React.FC = () => {
  const {
    initialComponent,
    searchFounded,
    loadingCarrierData,
  } = useSurveyContext();

  return (
    <Context>
      <SurveyContainer>
        <SearchPlateForm />
        {!searchFounded && !initialComponent ? (
          <>
            <CreateVehicle />
            <FindCNPJ />
            <SubmitSurvey />
          </>
        ) : (
          <></>
        )}
        {loadingCarrierData && searchFounded ? (
          <>
            <CarrierData />
            <SubmitSurvey />
          </>
        ) : (
          <></>
        )}
      </SurveyContainer>
    </Context>
  );
};

export default _Survey;
