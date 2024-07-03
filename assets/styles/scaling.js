/* import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';


const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBasewidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (width / guidelineBasewidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => Math.round(width / guidelineBaseFonts()) * size;

export {horizontalScale, verticalScale, scaleFontSize};
 */

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const rS = size => {
  return scale(size);
};

export const rV = size => {
  return verticalScale(size);
};

export const rMS = (size, factor?) => {
  return moderateScale(size, factor);
};
