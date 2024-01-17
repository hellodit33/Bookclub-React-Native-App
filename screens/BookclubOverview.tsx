import React from 'react';
import MajorTitle from '../components/MajorTitle';
import InputResult from '../components/InputResult';
import MainView from '../components/MainView';
import {MapGrid, MapInfoGrid, VerticalSpace} from '../components/styled';
import MapContainer from '../components/MapContainer';
import Book from '../assets/Book';
import Bookclub from '../assets/Bookclub';
import theme from '../UI';
import Map from '../assets/Map';
import Door from '../assets/Door';
import Edit from '../assets/Edit';
import Note from '../assets/Note';
import Star from '../assets/Star';
import Quote from '../assets/Quote';
import {useNavigation} from '@react-navigation/native';
import Body from '../components/Body';

const BookclubOverview = () => {
  const navigation = useNavigation();

  const handleNotesClick = () => {
    navigation.navigate('Notes');
  };

  const handleBookQuotesClick = () => {
    navigation.navigate('BookQuote');
  };

  return (
    <MainView headerTitle="My Bookclub">
      <VerticalSpace size={6} />
      <Body>
        <MajorTitle majorTitle="next bookclub" />
        <VerticalSpace size={2} />
        <InputResult
          inputInfo="Vinternoveller, av Ingvild H. Rishoi"
          editIcon={<Edit />}>
          <Book />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult inputInfo="17/02/2023" editIcon={<Edit />}>
          <Bookclub color={theme.primary.color} />
        </InputResult>
        <VerticalSpace size={4} />
        <MapGrid>
          <MapContainer />
          <MapInfoGrid>
            <InputResult mapInfo="Himlabacken 8, 17078 Solna">
              <Map />
            </InputResult>
            <VerticalSpace size={1} />
            <InputResult inputInfo="Door code:">
              <Door />
            </InputResult>
          </MapInfoGrid>
        </MapGrid>
        <VerticalSpace size={4} />
        <InputResult
          touchable
          inputInfo="Add book quotes"
          editIcon={<Edit />}
          onPress={handleBookQuotesClick}>
          <Quote />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult
          touchable
          inputInfo="Add notes before the bookclub"
          editIcon={<Edit />}
          onPress={handleNotesClick}>
          <Note />
        </InputResult>
        <VerticalSpace size={1} />
        <InputResult inputInfo="Rate the book" editIcon={<Edit />}>
          <Star />
        </InputResult>
      </Body>
    </MainView>
  );
};

export default BookclubOverview;
