import styled from 'styled-components/native';
import theme from '../../UI';

export const NotesView = styled.View`
  border-radius: 20px;
  height: 100%;
  border: 2px solid ${theme.primary.color};
`;

export const NotesText = styled.Text`
  font-size: 16px;
`;
