import React from 'react';
import * as S from './styled';

type OwnProps = {
  headerTitle: string;
};

type Props = OwnProps;

const PageTitle = ({headerTitle}: Props) => {
  return (
    <S.PageTitleView>
      <S.PageTitle>{headerTitle}</S.PageTitle>
    </S.PageTitleView>
  );
};

export default PageTitle;
