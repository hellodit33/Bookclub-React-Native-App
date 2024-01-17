import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Star = () => {
  return (
    <View>
      <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
        <Path
          d="M8.49996 1.41667L10.6887 5.85084L15.5833 6.56625L12.0416 10.0158L12.8775 14.8892L8.49996 12.5871L4.12246 14.8892L4.95829 10.0158L1.41663 6.56625L6.31121 5.85084L8.49996 1.41667Z"
          stroke="#9D5C63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Star;
