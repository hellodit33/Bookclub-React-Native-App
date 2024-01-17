import styled from 'styled-components/native';
import theme from '../../UI';

export const MainView = styled.View`
  height: 100%;
  background: ${theme.primary.onColor};
`;

export const Header = styled.View`
  flex-direction: row;
  padding-right: 30px;
  align-items: flex-end;
  justify-content: space-between;
`;
