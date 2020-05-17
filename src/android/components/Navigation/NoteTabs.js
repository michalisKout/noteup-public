import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListContainer from '../../containers/ListContainer';
import { colors, fonts } from '../../../styles/base';
import ProjectTasks from '../Projects/ProjectTasks';

const Tab = createMaterialTopTabNavigator();

const NoteTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Priority"
      tabBarOptions={{
        indicatorStyle: { opacity: 0 },
        activeTintColor: colors.primary,
        labelStyle: { fontSize: fonts.md, fontFamily: fonts.primary },
        style: { backgroundColor: colors.secondary, borderRadius: 12 },
      }}
    >
      <Tab.Screen name="Priority" options={{ tabBarLabel: 'Priority' }}>
        {(props) => <ListContainer {...props} isPriorityTab />}
      </Tab.Screen>
      <Tab.Screen name="AllNotes" options={{ tabBarLabel: 'All Notes' }}>
        {(props) => <ListContainer {...props} isPriorityTab={false} />}
      </Tab.Screen>
      <Tab.Screen name="Projects" component={ProjectTasks} options={{ tabBarLabel: 'Projects' }} />
    </Tab.Navigator>
  );
};

NoteTabs.propTypes = {};

export default NoteTabs;
