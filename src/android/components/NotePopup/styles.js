import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles/base';

export default StyleSheet.create({
  centeredView: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlignVertical: 'top',
    marginTop: 0,
    backgroundColor: colors.main,
  },
  notePopUpView: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 5,
    backgroundColor: colors.errorDefault,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 2,
  },
  takeNoteBtn: {
    alignSelf: 'flex-end',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontFamily: fonts.primary,
  },
  disabledBtn: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontFamily: fonts.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  popupText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: fonts.primary,
    fontSize: fonts.md,
  },
  inputNote: {
    color: colors.secondary,
    width: 300,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    maxHeight: 300,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  description: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  durationContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});
