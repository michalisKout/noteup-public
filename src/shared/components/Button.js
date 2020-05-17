import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { fonts, colors } from '../../styles/base';

const styles = StyleSheet.create({
  btn: {
    width: 200,
    marginTop: 10,
    borderRadius: 12,
  },
  btnNormalBg: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: 'transparent',
  },
  btnText: {
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',
    color: colors.secondary,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
  },
  btnDisabled: {
    backgroundColor: colors.secondary,
    color: colors.primary,
  },
  indicator: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const Button = ({ handleClick, hasErrors, pending = false, text }) => {
  const btnStyles = [styles.btn, hasErrors ? styles.btnDisabled : styles.btnNormalBg];
  return (
    <TouchableOpacity style={btnStyles} onPress={handleClick} disabled={hasErrors}>
      {pending ? (
        <ActivityIndicator size="small" color={colors.secondary} style={styles.indicator} />
      ) : (
        <Text style={styles.btnText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  hasErrors: false,
  text: 'Sign In',
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hasErrors: PropTypes.bool,
  pending: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

export default Button;
