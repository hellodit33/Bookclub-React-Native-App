import React from 'react';
import * as S from './styled';
import {QuarterCircle} from '../QuarterCircle/styled';
import PageTitle from '../PageTitle';

type OwnProps = {
  headerTitle: string;
  children: any;
  bookclub?: string;
};

type Props = OwnProps;

const MainView = ({headerTitle, children, bookclub}: Props) => {
  return (
    <S.MainView>
      <S.Header>
        <QuarterCircle />
        <PageTitle headerTitle={headerTitle} bookclub={bookclub} />
      </S.Header>
      {children}
    </S.MainView>
  );
};

export default MainView;
