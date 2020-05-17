import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import createStyles from '../../../styles/base';
import tabWrapperStyles from './styles';

const styles = createStyles(tabWrapperStyles);

const TabWrapper = (props) => {
  const { children, isProfile } = props;
  return (
    <SafeAreaView style={[styles.wrapper, styles.safeView]}>
      {isProfile && <Text style={styles.headerList}>Archived Notes</Text>}
      {children(props)}
    </SafeAreaView>
  );
};

TabWrapper.defaultProps = {
  isProfile: false,
};

TabWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  isProfile: PropTypes.bool,
};

export default TabWrapper;
