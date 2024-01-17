import React from 'react';
import * as S from './styled';

type OwnProps = {
  bookImage: string;
};

type Props = OwnProps;

const BookCover = ({bookImage}: Props) => {
  return (
    <S.BookImage
      source={{
        uri: bookImage,
      }}
    />
  );
};

export default BookCover;
