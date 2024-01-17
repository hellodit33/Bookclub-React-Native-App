import React from 'react';
import * as S from './styled';
import {VerticalSpace} from '../styled';

const NotesInput = () => {
  return (
    <S.NotesView>
      <VerticalSpace />
      <S.NotesText />
    </S.NotesView>
  );
};

export default NotesInput;
