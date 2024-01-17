import React from 'react';
import MainView from '../components/MainView';
import {VerticalSpace} from '../components/styled';
import MajorTitle from '../components/MajorTitle';
import BookQuote from '../components/BookQuote';
import BookQuotePic from '../components/BookQuotePic';
import Body from '../components/Body';
import InputResult from '../components/InputResult';
import Edit from '../assets/Edit';
import Note from '../assets/Note';
import {useNavigation} from '@react-navigation/native';

const BookQuotes = () => {
  const navigation = useNavigation();

  const handleAllQuotesClick = () => {
    navigation.navigate('AllQuotes');
  };

  return (
    <MainView headerTitle="Book quotes">
      <VerticalSpace size={2} />
      <Body>
        <VerticalSpace size={2} />
        <MajorTitle majorTitle="Add a book quote here" />
        <VerticalSpace size={1} />
        <BookQuote />
        <VerticalSpace size={2} />
        <MajorTitle majorTitle="Take a picture of a quote" />
        <VerticalSpace size={1} />
        <BookQuotePic />
        <VerticalSpace size={2} />
        <InputResult
          touchable
          inputInfo="See all the quotes for this book"
          editIcon={<Edit />}
          onPress={handleAllQuotesClick}>
          <Note />
        </InputResult>
      </Body>
    </MainView>
  );
};

export default BookQuotes;
