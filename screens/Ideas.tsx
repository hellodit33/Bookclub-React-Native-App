import React from 'react';
import MainView from '../components/MainView';
import {VerticalSpace} from '../components/styled';
import Body from '../components/Body';
import MajorTitle from '../components/MajorTitle';
import IdeasGrid from '../components/IdeasGrid';
import {BookCoverView} from '../components/BookCover/styled';
import BookCover from '../components/BookCover';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import InputResult from '../components/InputResult';
import Bookclub from '../assets/Bookclub';
import theme from '../UI';

const Ideas = () => {
  const navigation = useNavigation();

  const handleCoverClick = item => {
    navigation.navigate('BookIdeaDetails', {item});
  };
  const bookImages = [
    'https://gfx.nrk.no/YkgXTg9HGdsbxngOrZ7pKA721C-TqCs64Ry1Dik98xqQ.jpg',
    'https://www.smakprov.se/app/uploads/2020/05/5da88ba94fe1e-1.jpg',
  ];
  const repeatedBookImages = Array.from(
    {length: 20},
    (_, index) => bookImages[index % bookImages.length],
  );

  return (
    <MainView headerTitle="Ideas">
      <VerticalSpace size={6} />
      <Body>
        <MajorTitle majorTitle="Suggest a book for the next bookclub" />
        <VerticalSpace size={2} />
        <IdeasGrid />
        <VerticalSpace size={2} />
        <MajorTitle majorTitle="Book suggestions" />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {repeatedBookImages.map((item, index) => (
            <BookCoverView
              key={index}
              onPress={() => handleCoverClick(item)}
              style={{width: '25%'}}>
              <BookCover bookImage={item} />
            </BookCoverView>
          ))}
        </View>
        <VerticalSpace size={2} />

        <InputResult inputInfo="Click on a book to rate the suggestion">
          <Bookclub color={theme.primary.color} />
        </InputResult>
        <VerticalSpace size={6} />
      </Body>
    </MainView>
  );
};

export default Ideas;
