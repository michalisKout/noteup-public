import { StyleSheet } from 'react-native';
import { button, colors, fonts, padding } from '../../../styles/base';

const sidesPadding = {
  paddingLeft: padding.xsm,
  paddingRight: padding.xsm,
};

export default StyleSheet.create({
  headerList: {
    fontSize: fonts.lg,
    color: colors.secondary,
    marginBottom: 5,
    fontFamily: fonts.primary,
    textAlign: 'center',
  },
  noteBox: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.xsm,
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginBottom: 5,
    elevation: 2,
  },
  date: {
    fontSize: fonts.sm,
    color: colors.secondary,
    paddingTop: padding.sm,
    paddingHorizontal: padding.xsm,
    fontFamily: fonts.primary,
  },
  description: {
    fontSize: fonts.md,
    color: colors.secondary,
    fontFamily: fonts.primary,
  },
  note: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.warningPrimary,
    borderRadius: 7,
    backgroundColor: colors.primary,
    ...button.sm,
  },
  archiveNote: {
    borderColor: colors.warningPrimary,
  },
  restoreNote: {
    borderColor: colors.successPrimary,
    marginRight: 10,
  },
  deleteNote: {
    borderColor: colors.errorDefault,
  },
  deleteIconStyle: {
    color: colors.errorDefault,
  },
  restoreIconStyle: {
    color: colors.successPrimary,
  },
  iconStyle: {
    color: colors.warningPrimary,
  },
  noteFooter: {
    ...sidesPadding,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
  indicator: {
    marginTop: 150,
  },
  safeView: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    maxHeight: 700,
    height: '100%',
  },
  noteHeader: {
    paddingHorizontal: padding.xsm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: fonts.secondary,
  },
  headerItem: {
    fontFamily: fonts.secondary,
  },
  labelContainer: {
    width: 100,
    height: 20,
  },
  label: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
