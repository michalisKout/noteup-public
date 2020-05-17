import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../../styles/base';

const NoteOption = ({ styles, text }) => {
  const [hasDuration, setDuration] = useState(false);

  const toggleDuration = () => setDuration(!hasDuration);
  return (
    <View style={styles.durationContainer}>
      <Text style={styles.popupText}>{text}</Text>
      <Switch
        style={styles.duration}
        trackColor={colors.primary}
        thumbColor={hasDuration ? colors.secondary : colors.primary}
        onValueChange={toggleDuration}
        value={hasDuration}
      />
    </View>
  );
};

NoteOption.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
};

export default NoteOption;
