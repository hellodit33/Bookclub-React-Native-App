import styled from 'styled-components/native';

export const BookGrid = styled.View`
  flex-direction: row;
  width: 150px;
  gap: 20px;
  height: 200px;
`;

export const BookCover = styled.Image``;

export const BookInfo = styled.View`
  flex-direction: column;
`;

export const BookAuthor = styled.Text`
  font-size: 15px;
`;

export const BookSummary = styled.Text`
  font-size: 12px;
`;
