import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    paddingHorizontal: 15,
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
  },
});

export default style;
