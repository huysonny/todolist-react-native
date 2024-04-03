import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamiles';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
}

const TitleComponent = (props: Props) => {
  const {text, font, size, color} = props;
  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      text={text}
    />
  );
};

export default TitleComponent;
