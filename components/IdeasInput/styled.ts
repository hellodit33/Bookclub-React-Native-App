import styled from 'styled-components/native';
import theme from '../../UI';

export const IdeasInput = styled.View`
  border-radius: 10px;
  width: 150px;
  height: 30px;
  border: 1px solid ${theme.primary.color};
  justify-content: center;
  padding-left: 10px;
`;

export const IdeasText = styled.Text`
  font-size: 12px;
`;
