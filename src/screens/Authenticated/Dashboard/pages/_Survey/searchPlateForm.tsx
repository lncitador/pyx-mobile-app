import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { InputForm, RectButtonForm } from '../../../../../components';
import { useSurveyContext } from './context';

import { Container, PlateSearchContainer } from './styles';

const SearchPlateForm: React.FC = () => {
  const { changeInitialComponent } = useSurveyContext();
  const formSearchRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Form
        ref={formSearchRef}
        onSubmit={() => {
          changeInitialComponent();
        }}>
        <PlateSearchContainer>
          <InputForm
            maxLength={7}
            autoCorrect={false}
            autoCapitalize="none"
            width={50}
            name="plate"
            label="Placa"
          />
          <RectButtonForm
            icon={'search'}
            onPress={() => {
              return formSearchRef.current?.submitForm();
            }}
          />
        </PlateSearchContainer>

        {/* {messageError.length > 0 ? <Popups>{messageError}</Popups> : <></>} */}
      </Form>
    </Container>
  );
};

export default SearchPlateForm;
