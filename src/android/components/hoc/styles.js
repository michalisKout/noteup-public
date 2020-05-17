import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles/base';

export default StyleSheet.create({
  headerList: {
    fontSize: fonts.lg,
    color: colors.secondary,
    marginBottom: 5,
    fontFamily: fonts.primary,
    textAlign: 'center',
  },
  safeView: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    maxHeight: 700,
    height: '100%',
  },
});
