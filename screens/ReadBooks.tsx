import React from 'react';
import MainView from '../components/MainView';
import BookCover from '../components/BookCover';
import {FlatList} from 'react-native';
import {BookCoverView} from '../components/BookCover/styled';
import MajorTitle from '../components/MajorTitle';
import {VerticalSpace} from '../components/styled';
import {useNavigation} from '@react-navigation/native';

const ReadBooks = () => {
  const navigation = useNavigation();

  const handleCoverClick = item => {
    navigation.navigate('BookDetails', {item});
  };

  const bookImages = [
    'https://gfx.nrk.no/YkgXTg9HGdsbxngOrZ7pKA721C-TqCs64Ry1Dik98xqQ.jpg',
    'https://www.smakprov.se/app/uploads/2020/05/5da88ba94fe1e-1.jpg',
  ];
  const repeatedBookImages = Array.from(
    {length: 20},
    (_, index) => bookImages[index % bookImages.length],
  );

  const renderItem = ({item, index}) => (
    <BookCoverView onPress={() => handleCoverClick(item)}>
      <BookCover key={index} bookImage={item} />
    </BookCoverView>
  );

  return (
    <MainView headerTitle="Read books">
      <VerticalSpace size={2} />
      <MajorTitle majorTitle="2022" />
      <VerticalSpace size={1} />

      <FlatList
        data={repeatedBookImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        scrollEnabled={true}
        contentContainerStyle={{paddingLeft: 15, paddingRight: 15}}
      />
    </MainView>
  );
};

export default ReadBooks;
