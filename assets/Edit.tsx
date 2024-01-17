import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Edit = () => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <Path
          d="M17 3C17.2626 2.73736 17.5744 2.52902 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52902 20.7374 2.73736 21 3C21.2626 3.26264 21.471 3.57445 21.6131 3.91761C21.7553 4.26077 21.8284 4.62857 21.8284 5C21.8284 5.37144 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73736 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
          stroke="#9D5C63"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Edit;
