import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Quote = () => {
  return (
    <View>
      <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <Path
          d="M1.74996 12.25C3.49996 12.25 5.83329 11.6667 5.83329 7.58333V2.91667C5.83329 2.1875 5.39229 1.74008 4.66663 1.75H2.33329C1.60413 1.75 1.16663 2.1875 1.16663 2.90033V6.41667C1.16663 7.14583 1.60413 7.58333 2.33329 7.58333C2.91663 7.58333 2.91663 7.58333 2.91663 8.16667V8.75C2.91663 9.33333 2.33329 9.91667 1.74996 9.91667C1.16663 9.91667 1.16663 9.92133 1.16663 10.5181V11.6667C1.16663 12.25 1.16663 12.25 1.74996 12.25Z"
          stroke="#9D5C63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.74996 12.25C10.5 12.25 12.8333 11.6667 12.8333 7.58333V2.91667C12.8333 2.1875 12.3917 1.74008 11.6666 1.75H9.33329C8.60413 1.75 8.16663 2.1875 8.16663 2.90033V6.41667C8.16663 7.14583 8.60413 7.58333 9.33329 7.58333H9.77079C9.77079 8.89583 9.91663 9.91667 8.16663 9.91667V11.6667C8.16663 12.25 8.16663 12.25 8.74996 12.25Z"
          stroke="#9D5C63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Quote;
