import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { useNotePriority } from '../../../utils/hooks/useNotePriority';
import { colors } from '../../../styles/base';

const NoteOption = ({ text }) => {
  const { priority, setPriority } = useNotePriority();
  const toggleSwitch = (val) => {
    setPriority(val);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        trackColor={{ false: colors.primary, true: colors.secondary }}
        thumbColor={priority ? colors.successPrimary : colors.errorDefault}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={priority}
      />
      <Text>{text}</Text>
    </View>
  );
};

NoteOption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoteOption;
