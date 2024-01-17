import React from 'react';
import MainView from '../components/MainView';
import {VerticalSpace} from '../components/styled';
import Body from '../components/Body';
import {BookCoverView} from '../components/BookCover/styled';
import {View} from 'react-native';
import BookCover from '../components/BookCover';

const Bookclub = () => {
  const bookImages = [
    'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/278742603_5145386525525668_2697032811716595650_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AmhBoi3T2PYAX9DqyDm&_nc_ht=scontent-mad1-1.xx&oh=00_AfCZlRRjT2KIc7-2N5KNtDe6eYUUuhQcDQUGKzRh_d8Jvw&oe=65ACED79',
    'https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/36498691_10155726506421909_8667960193419575296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=as4w9k1Mf7YAX9DZv11&_nc_oc=AQkEhB9eYT67jfRKSeEHw23dC2zGiU5gc6PGdu3hGEqb1KaDgSBR2rZnRViJ3ZLeZOc&_nc_ht=scontent-mad1-1.xx&oh=00_AfAjeYMiuk-qgucRD0GLBi6_1mLIwOAzokBk9FcZT4WTZw&oe=65CFAAE8',
  ];
  const repeatedBookImages = Array.from(
    {length: 20},
    (_, index) => bookImages[index % bookImages.length],
  );

  return (
    <MainView headerTitle="My Bookclub" bookclub="Title">
      <VerticalSpace size={6} />
      <Body>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {repeatedBookImages.map((item, index) => (
            <BookCoverView key={index} style={{width: '25%'}}>
              <BookCover bookImage={item} />
            </BookCoverView>
          ))}
        </View>
      </Body>
    </MainView>
  );
};

export default Bookclub;
