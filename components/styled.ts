import {View} from 'react-native';
import styled from 'styled-components/native';

type SpaceProps = {
  size?: number;
};

export const HorizontalSpace = styled(View)<SpaceProps>`
  width: ${({size}) => (size ? 10 * size : 0)}px;
`;

export const VerticalSpace = styled(View)<SpaceProps>`
  height: ${({size}) => (size ? 10 * size : 0)}px;
`;

export const MapGrid = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const MapInfoGrid = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const CoverGrid = styled(View)`
  display: flex;
  flex-direction: row;
`;
