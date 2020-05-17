import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  iconWrapper: {
    maxWidth: 50,
    paddingHorizontal: 3,
    paddingVertical: 6,
    marginHorizontal: 3,
  },
  btnWrapper: {
    marginVertical: 5,
    borderRadius: 50,
  },
  icon: {
    width: 50,
    textAlign: 'center',
    color: colors.secondary,
  },
});

const IconButton = ({ faIcon, handlePress, btnStyling, iconStyling, fontSize }) => {
  return (
    <TouchableOpacity style={[styles.btnWrapper, ...btnStyling]} onPress={handlePress}>
      <View style={styles.iconWrapper}>
        <FontAwesomeIcon icon={faIcon} style={[styles.icon, iconStyling]} size={fontSize} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  faIcon: faAd,
  handlePress: () => true,
  fontSize: 40,
  btnStyling: [],
  iconStyling: {},
};

IconButton.propTypes = {
  fontSize: PropTypes.number,
  faIcon: PropTypes.object,
  handlePress: PropTypes.func,
  btnStyling: PropTypes.array,
  iconStyling: PropTypes.object,
};

export default IconButton;
