import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding-top: 42px;
  padding-bottom: 16px;
  max-height: 102px;
  background-color: #232f34;
`;

export const TopBar = styled.SafeAreaView`
  margin: 0 16px;
  flex: 1;
  flex-direction: row;
  align-content: space-between;
`;

export const LeftBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RightBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  color: #f9aa33;
  font-size: 20px;
`;

export const IconsLeft = styled(MaterialIcons)`
  margin-right: 16px;
`;
export const IconsRight = styled(MaterialIcons)`
  margin-left: 16px;
`;
