import React from 'react';
import { View, FlatList } from 'react-native';
import Project from './Project';

const ProjectTasks = () => {
  return (
    <View>
      <FlatList data={[{ text: 'hello' }]} renderItem={(item) => <Project text={item.text} />} />
    </View>
  );
};

export default ProjectTasks;
