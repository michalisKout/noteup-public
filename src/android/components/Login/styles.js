import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles/base';

export default StyleSheet.create({
  title: {
    fontSize: fonts.lg,
    textAlign: 'center',
    width: 200,
    color: colors.secondary,
    fontFamily: fonts.primary,
  },
  input: {
    width: 200,
    backgroundColor: 'transparent',
    color: colors.secondary,
    marginTop: 10,
    fontFamily: fonts.primary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  loginFlex: {
    paddingTop: 35,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 100,
  },
  loginWrapper: {
    flex: 1,
  },
});
