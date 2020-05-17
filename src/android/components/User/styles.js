import { StyleSheet } from 'react-native';
import { button, colors } from '../../../styles/base';

export default StyleSheet.create({
  addNoteBtn: {
    ...button.lg,
  },
  containerInputWithIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userWrapper: {
    flex: 1,
  },
  icon: {
    color: colors.primary,
  },
});
