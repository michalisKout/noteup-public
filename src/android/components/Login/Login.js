import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { loginConstrains } from '../../../config/validation';
import Button from '../../../shared/components/Button';
import actionLogs from '../../../actions/logActions';
import { getValidateMessages } from '../../../utils/utils';
import createStyles from '../../../styles/base';
import loginStyles from './styles';
import Title from '../../../shared/components/PageTitle/PageTitle';
import LogMessages from '../../../shared/components/Logs/LogMessages';

const styles = createStyles(loginStyles);

const Login = ({ userLogin, loginInfo }) => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(actionLogs.clearLogs());
    const loginValidation = validate({ userPassword, userEmail }, loginConstrains);
    if (loginValidation) {
      const validationMessages = getValidateMessages(loginValidation);
      dispatch(actionLogs.errorLog(validationMessages));
    } else {
      userLogin(userEmail, userPassword);
    }
  };

  return (
    <ImageBackground source={{ uri: 'login_bg' }} style={[styles.wrapper, styles.loginWrapper]}>
      <Title reverseColor title="NoteUp" />
      <View style={styles.loginFlex}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          textContentType="emailAddress"
          placeholder="Your Email"
          style={styles.input}
          value={userEmail}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          secureTextEntry
          textContentType="password"
          placeholder="Your Password"
          style={styles.input}
          value={userPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <Button handleClick={handleLogin} pending={loginInfo.pending} />
        <View style={styles.section}>
          <LogMessages />
        </View>
      </View>
    </ImageBackground>
  );
};

Login.propTypes = {
  loginInfo: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
};

export default Login;
