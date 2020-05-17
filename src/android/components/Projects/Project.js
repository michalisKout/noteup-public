import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Project = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

Project.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Project;
