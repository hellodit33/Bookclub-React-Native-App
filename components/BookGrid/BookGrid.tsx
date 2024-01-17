import React from 'react';
import * as S from './styled';
import BookCover from '../BookCover';

type OwnProps = {
  author?: string;
  summary?: string;
  item: string;
};

type Props = OwnProps;

const BookGrid = ({item, author, summary}: Props) => {
  return (
    <S.BookGrid>
      <BookCover bookImage={item} />
      <S.BookInfo>
        <S.BookAuthor>{author}</S.BookAuthor>
        <S.BookSummary>{summary}</S.BookSummary>
      </S.BookInfo>
    </S.BookGrid>
  );
};

export default BookGrid;
