import React from 'react';
import MainView from '../components/MainView';
import {VerticalSpace} from '../components/styled';
import Body from '../components/Body';
import InputResult from '../components/InputResult';
import Edit from '../assets/Edit';
import Note from '../assets/Note';
import BookGrid from '../components/BookGrid';
import MajorTitle from '../components/MajorTitle';

const BookIdeaDetails = ({route}) => {
  const item = route.params.item;

  return (
    <MainView headerTitle="Book title">
      <VerticalSpace size={6} />
      <Body>
        <BookGrid item={item} summary="blabla" author="Therese Bohman" />
        <VerticalSpace size={2} />
        <VerticalSpace size={2} />
        <InputResult
          touchable
          inputInfo="Bookclub: 10/02/2022"
          editIcon={<Edit />}>
          <Note />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult
          touchable
          inputInfo="Average rating: 2,5/5"
          editIcon={<Edit />}>
          <Note />
        </InputResult>
        <VerticalSpace size={1} />
        <MajorTitle majorTitle="Motivation" />
        <Comment comment='Jag tycker att vi ska läsa den för att...'></Comment>
        <MajorTitle majorTitle="Vote for the suggestion" />

        <InputResult touchable inputInfo="Notes" editIcon={<Edit />}>
          <Note />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult touchable inputInfo="Quotes" editIcon={<Edit />}>
          <Note />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult
          touchable
          inputInfo="Missed it? Mark it as to read"
          editIcon={<Edit />}>
          <Note />
        </InputResult>
      </Body>
    </MainView>
  );
};

export default BookIdeaDetails;
