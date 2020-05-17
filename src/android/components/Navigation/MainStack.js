import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../../containers/LoginContainer';
import UserContainer from '../../containers/UserContainer';
import NotePopupContainer from '../../containers/NotePopupContainer';

const Stack = createStackNavigator();
const MainStack = ({ loginInfo }) => {
  return (
    <Stack.Navigator>
      {loginInfo.loggedIn ? (
        <Stack.Screen
          name="UserProfile"
          component={UserContainer}
          options={{
            header: () => null,
          }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{
            header: () => null,
            animationTypeForReplace: loginInfo.loggedIn ? 'push' : 'pop',
          }}
        />
      )}
      <Stack.Screen
        name="NotePopupPage"
        options={{
          header: () => null,
        }}
        component={NotePopupContainer}
      />
    </Stack.Navigator>
  );
};

MainStack.propTypes = {
  loginInfo: PropTypes.shape({
    user: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MainStack;
