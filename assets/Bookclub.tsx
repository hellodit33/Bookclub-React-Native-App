import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
};
const Bookclub = ({color}: Props) => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 35 35" fill="none">
        <Path
          d="M30.625 14.5833V8.75001C30.625 7.97646 30.3177 7.2346 29.7707 6.68762C29.2237 6.14063 28.4819 5.83334 27.7083 5.83334H7.29167C6.51812 5.83334 5.77625 6.14063 5.22927 6.68762C4.68229 7.2346 4.375 7.97646 4.375 8.75001V29.1667C4.375 30.7708 5.6875 32.0833 7.29167 32.0833H17.5"
          stroke={color ? color : 'white'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.3334 2.91666V8.74999"
          stroke={color ? color : 'white'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.6666 2.91666V8.74999"
          stroke={color ? color : 'white'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.375 14.5833H30.625"
          stroke={color ? color : 'white'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M31.048 21.4375C30.551 20.943 29.9186 20.607 29.2307 20.472C28.5428 20.3371 27.8303 20.4091 27.1834 20.6792C26.7459 20.8542 26.3521 21.1167 26.0167 21.4521L25.5209 21.9479L25.0104 21.4521C24.5152 20.9552 23.8835 20.6164 23.1955 20.4788C22.5075 20.3412 21.7942 20.411 21.1459 20.6792C20.7084 20.8542 20.3292 21.1167 19.9938 21.4521C18.6084 22.8229 18.5355 25.1417 20.2855 26.9062L25.5209 32.0833L30.7709 26.9062C32.5209 25.1417 32.4334 22.8229 31.048 21.4521V21.4375Z"
          stroke={color ? color : 'white'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Bookclub;
