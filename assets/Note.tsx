import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Note = () => {
  return (
    <View>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Path
          d="M7.375 2.50262H2.41667C2.04094 2.50262 1.68061 2.65188 1.41493 2.91756C1.14926 3.18323 1 3.54357 1 3.91929V13.836C1 14.2117 1.14926 14.572 1.41493 14.8377C1.68061 15.1034 2.04094 15.2526 2.41667 15.2526H12.3333C12.7091 15.2526 13.0694 15.1034 13.3351 14.8377C13.6007 14.572 13.75 14.2117 13.75 13.836V8.87762"
          stroke="#9D5C63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.6875 1.4401C12.9693 1.15831 13.3515 1 13.75 1C14.1485 1 14.5307 1.15831 14.8125 1.4401C15.0943 1.72189 15.2526 2.10409 15.2526 2.5026C15.2526 2.90112 15.0943 3.28331 14.8125 3.5651L8.08333 10.2943L5.25 11.0026L5.95833 8.16927L12.6875 1.4401Z"
          stroke="#9D5C63"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Note;
