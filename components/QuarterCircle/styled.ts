import styled from 'styled-components/native';
import theme from '../../UI';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

export const QuarterCircle = styled.View`
  width: 90px;
  height: 90px;
  border-top-left-radius: 100px;
  background-color: ${theme.primary.color};
  transform: rotate(180deg);
`;
