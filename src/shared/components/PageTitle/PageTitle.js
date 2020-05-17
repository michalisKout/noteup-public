import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import createStyles, { colors } from '../../../styles/base';
import stylesTitle from './styles';

const styles = createStyles(stylesTitle);

const PageTitle = ({ title, reverseColor }) => {
  const fontColor = { color: reverseColor ? colors.main : colors.secondary };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, fontColor]} selectable>
        {title}
      </Text>
    </View>
  );
};
PageTitle.defaultProps = {
  reverseColor: false,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  reverseColor: PropTypes.bool,
};

export default PageTitle;
