import {View, Text} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamiles';

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
}
const CircularComponent = (props: Props) => {
  const {color, value, maxValue} = props;
  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={'#3C444A'}
      titleColor={colors.text}
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
      titleFontSize={20}
      titleStyle={{
        fontFamily: fontFamilies.medium,
      }}
    />
  );
};

export default CircularComponent;
