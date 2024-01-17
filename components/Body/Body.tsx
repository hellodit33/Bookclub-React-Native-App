import React from 'react';
import * as S from './styled';

type OwnProps = {
  children: any;
};

type Props = OwnProps;

const Body = ({children}: Props) => {
  return <S.BodyView>{children}</S.BodyView>;
};

export default Body;
