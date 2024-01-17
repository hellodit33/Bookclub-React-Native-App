import React from 'react';
import * as S from './styled';
import BookclubName from '../BookclubName';

type OwnProps = {
  headerTitle: string;
  bookclub?: string;
};

type Props = OwnProps;

const PageTitle = ({headerTitle, bookclub}: Props) => {
  return (
    <S.PageTitleView>
      <S.PageTitle>{headerTitle}</S.PageTitle>
      {bookclub && <BookclubName text={bookclub} />}
    </S.PageTitleView>
  );
};

export default PageTitle;
