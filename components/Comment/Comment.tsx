import React from 'react';
import * as S from './styled';

type OwnProps = {
  comment: string;
};

type Props = OwnProps;

const Comment = ({comment}: Props) => {
  return (
    <S.CommentView>
      <S.Comment>{comment}</S.Comment>
    </S.CommentView>
  );
};

export default Comment;
