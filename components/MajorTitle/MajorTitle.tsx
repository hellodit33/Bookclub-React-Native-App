import React from 'react';
import * as S from './styled';

type OwnProps = {
  majorTitle: string;
};

type Props = OwnProps;

const MajorTitle = ({majorTitle}: Props) => {
  return (
    <S.MajorView>
      <S.MajorTitle>{majorTitle}</S.MajorTitle>
    </S.MajorView>
  );
};

export default MajorTitle;
