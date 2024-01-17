import styled from 'styled-components/native';
import theme from '../../UI';

export const InputView = styled.View`
  border-bottom: 1px solid black;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.tertiary.color};
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const InputTouchableOpacity = styled.TouchableOpacity`
  border-bottom: 1px solid black;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.tertiary.color};
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const InputIconText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const InputText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const InputMap = styled.Text`
  display: flex;
  flex-direction: column;
  width: 100px;
  color: black;
`;

export const InputLogo = styled.Image``;
