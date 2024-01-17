import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Read = () => {
  return (
    <View>
      <Svg width="25" height="25" viewBox="0 0 35 35" fill="none">
        <Path
          d="M11.6666 4.375H2.91663V26.25H13.125C15.6041 26.25 17.5 28.1458 17.5 30.625V10.2083C17.5 7 14.875 4.375 11.6666 4.375Z"
          stroke="#F5F5F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.3334 17.5L26.25 20.4167L32.0834 14.5833"
          stroke="#F5F5F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M32.0833 8.75V4.375H23.3333C20.125 4.375 17.5 7 17.5 10.2083V30.625C17.5 28.1458 19.3958 26.25 21.875 26.25H32.0833V22.8958"
          stroke="#F5F5F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Read;
