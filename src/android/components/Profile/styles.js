import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../../styles/base';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    textAlign: 'center',
  },
  logOutBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.main,
    borderColor: colors.main,
    borderRadius: 100,
    width: 32,
    height: 32,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logOutText: {
    color: '#204051',
  },
});
