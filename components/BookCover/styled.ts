import styled from 'styled-components/native';

export const BookCoverView = styled.TouchableOpacity`
  width: 90px;
  height: 110px;
  gap: 10px;
  display: flex;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid transparent;
  border-radius: 20px;
`;

export const BookImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
