import React from 'react';
import * as S from './styled';
import {VerticalSpace} from '../styled';

type OwnProps = {
  text?: string;
};

type Props = OwnProps;

const SubmitButton = ({text}: Props) => {
  return (
    <S.SubmitView>
      <VerticalSpace />
      <S.SubmitText>{text}</S.SubmitText>
    </S.SubmitView>
  );
};

export default SubmitButton;
