import styled from 'styled-components/native';
import theme from '../../UI';

export const SubmitView = styled.View`
  border-radius: 10px;
  width: 150px;
  height: 30px;
  background-color: ${theme.primary.color};
  border: 1px solid ${theme.primary.color};
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
