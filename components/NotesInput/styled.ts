import styled from 'styled-components/native';
import theme from '../../UI';

export const NotesView = styled.View`
  border-radius: 20px;
  height: 80%;
  margin-horizontal: 30px;
  border: 2px solid ${theme.primary.color};
`;

export const NotesText = styled.Text`
  font-size: 16px;
`;
