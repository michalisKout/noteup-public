import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles/base';

export default StyleSheet.create({
  animation: {},
  logs: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  errorLogBg: {
    backgroundColor: colors.errorSecondary,
  },
  successLogBg: {
    backgroundColor: colors.successPrimary,
  },
  warningLogBg: {
    backgroundColor: colors.warningSecondary,
  },
  errorLog: {
    backgroundColor: 'transparent',
    borderColor: colors.errorDefault,
    color: colors.errorPrimary,
  },
  successLog: {
    backgroundColor: 'transparent',
    borderColor: colors.successDefault,
    color: colors.successSecondary,
  },
  warningLog: {
    backgroundColor: 'transparent',
    borderColor: colors.warningSecondary,
    color: colors.warningPrimary,
  },
  logMessage: {
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  wrapperMessage: {
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.sm,
    fontFamily: fonts.primary,
  },
});
