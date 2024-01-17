import React from 'react';
import * as S from './styled';
import {VerticalSpace} from '../styled';

type OwnProps = {
  text?: string;
};

type Props = OwnProps;

const IdeasInput = ({text}: Props) => {
  return (
    <S.IdeasInput>
      <VerticalSpace />
      <S.IdeasText>{text}</S.IdeasText>
    </S.IdeasInput>
  );
};

export default IdeasInput;
