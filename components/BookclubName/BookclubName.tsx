import React from 'react';
import * as S from './styled';

type OwnProps = {
  text?: string;
  onPress?: () => void;
};

type Props = OwnProps;

const BookclubName = ({text, onPress}: Props) => {
  return (
    <S.InputTouchableOpacity onPress={onPress}>
      <S.InputIconText>{text}</S.InputIconText>
    </S.InputTouchableOpacity>
  );
};

export default BookclubName;
