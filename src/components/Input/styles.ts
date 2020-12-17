import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;

  flex-direction: column;
  align-items: flex-start;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const InputView = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #344955;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #344955;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f93333;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #4a6572;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f2f2f2;
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const Label = styled.Text`
  width: 100%;
  margin-bottom: 8px;
  font-family: 'Roboto-Regular';
  color: #9bb5c0;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
