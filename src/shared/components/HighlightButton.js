import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

const HighlightButton = ({ btnStyles, textStyles, text, onPressHandler, shouldDisable }) => {
  return (
    <TouchableHighlight disabled={shouldDisable} style={btnStyles} onPress={onPressHandler}>
      <Text style={textStyles}>{text}</Text>
    </TouchableHighlight>
  );
};

HighlightButton.defaultProps = {
  btnStyles: {},
  textStyles: {},
  shouldDisable: false,
};

HighlightButton.propTypes = {
  shouldDisable: PropTypes.bool,
  btnStyles: PropTypes.object,
  textStyles: PropTypes.object,
  text: PropTypes.string.isRequired,
  onPressHandler: PropTypes.func.isRequired,
};

export default HighlightButton;
