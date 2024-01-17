import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Book = () => {
  return (
    <View>
      <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <Path
          d="M10.5 3.5V17.5M2.625 5.6C2.625 4.0215 2.93387 3.57525 4.30237 3.50875C4.57975 3.49563 4.85275 3.4335 5.10563 3.31975C5.677 3.06425 6.77775 2.625 7.6125 2.625C8.267 2.625 9.08425 2.8945 9.68275 3.13425C10.2075 3.34364 10.7925 3.34364 11.3173 3.13425C11.9158 2.8945 12.733 2.625 13.3875 2.625C14.2223 2.625 15.323 3.06425 15.8944 3.31975C16.1473 3.4335 16.4203 3.49563 16.6976 3.50875C18.0661 3.57525 18.375 4.0215 18.375 5.6V16.275C18.375 17.8535 18.0661 18.2997 16.6976 18.3662C16.4201 18.373 16.1449 18.3142 15.8944 18.1948C15.323 17.9393 14.2223 17.5 13.3875 17.5C12.733 17.5 11.9158 17.7695 11.3173 18.0093C10.7925 18.2186 10.2075 18.2186 9.68275 18.0093C9.08425 17.7695 8.267 17.5 7.6125 17.5C6.77775 17.5 5.677 17.9393 5.10563 18.1948C4.85275 18.3085 4.57975 18.3785 4.30237 18.3662C2.93387 18.2997 2.625 17.8535 2.625 16.275V5.6Z"
          stroke="#9D5C63"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Book;
