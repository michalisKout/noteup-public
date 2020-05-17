import { StyleSheet } from 'react-native';

export const dimensions = {
  fullHeight: '100%',
  fullWidth: '100%',
};

export const colors = {
  main: '#FFF',
  primary: '#f4f4f4',
  secondary: '#204051',
  tertiary: '#5DA6A7',
  errorPrimary: '#69585F',
  errorSecondary: '#EF959D',
  errorDefault: '#FF5E5B',
  successPrimary: '#D6E09D',
  successSecondary: '#04773B',
  successDefault: '#285238',
  warningPrimary: '#f4a548',
  warningSecondary: '#f6d198',
};

export const padding = {
  xsm: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 16,
  lg: 30,
  xl: 40,
  primary: 'BalooBhaina2-Regular',
  secondary: 'GochiHand-Regular',
};

export const button = {
  sm: {
    width: 27,
    height: 27,
  },
  md: {
    width: 35,
    height: 35,
  },
  lg: {
    width: 52,
    height: 52,
  },
};

const baseStyles = {
  container: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    fontFamily: fonts.primary,
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
  wrapper: {
    paddingHorizontal: padding.sm,
    backgroundColor: colors.main,
    flexDirection: 'column',
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
