import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import createStyles, { colors } from '../../styles/base';
import MainStack from './Navigation/MainStack';

const main = {
  backgroundColor: colors.main,
};
const styles = createStyles({ main });

const Main = (props) => {
  const { loginInfo } = props;
  return (
    <View style={[styles.container, styles.main]}>
      <View style={styles.container}>
        <MainStack loginInfo={loginInfo} />
      </View>
    </View>
  );
};

Main.propTypes = {
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Main;
