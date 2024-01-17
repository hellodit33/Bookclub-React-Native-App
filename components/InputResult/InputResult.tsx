import React from 'react';
import * as S from './styled';

type OwnProps = {
  inputInfo?: string;
  mapInfo?: string;
  children?: React.ReactNode;
  editIcon?: React.ReactNode;
  touchable?: boolean;
  onPress?: () => void;
};

type Props = OwnProps;

const InputResult = ({
  inputInfo,
  mapInfo,
  children,
  editIcon,
  touchable,
  onPress,
}: Props) => {
  const InputComponent = touchable ? S.InputTouchableOpacity : S.InputView;

  return (
    <InputComponent touchable={touchable} onPress={onPress}>
      <S.InputIconText>
        {children}
        {inputInfo && <S.InputText>{inputInfo}</S.InputText>}
        {mapInfo && <S.InputMap>{mapInfo}</S.InputMap>}
      </S.InputIconText>
      {editIcon}
    </InputComponent>
  );
};

export default InputResult;
