import React from 'react';
import * as S from './styled';
import {VerticalSpace} from '../styled';
import IdeasInput from '../IdeasInput';
import SubmitButton from '../SubmitButton';

type OwnProps = {};

type Props = OwnProps;

const IdeasGrid = ({}: Props) => {
  return (
    <S.BookGrid>
      <S.GridColumn>
        <IdeasInput text="Enter book title*" />
        <VerticalSpace size={1} />
        <IdeasInput text="Enter book author*" />
        <VerticalSpace size={1} />
        <IdeasInput text="Enter summary" />
        <VerticalSpace size={1} />
        <IdeasInput text="Why should we read it" />
        <VerticalSpace size={1} />
      </S.GridColumn>
      <S.GridColumn>
        <VerticalSpace size={1} />
        <IdeasInput />
        <VerticalSpace size={1} />
        <IdeasInput text="Pages" />
        <VerticalSpace size={4} />
        <SubmitButton text="Save book idea" />
      </S.GridColumn>
    </S.BookGrid>
  );
};

export default IdeasGrid;
