import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImage: {
    width: 110,
    height: 110,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: 4,
    borderRadius: 110,
  },
  UserName: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 20,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 20,
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 16,
    color: '#79869F',
    textAlign: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
