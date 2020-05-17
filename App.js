import React from 'react';
import { View } from 'react-native';
import IndexAndroid from './src/android/index.android';

const App = () => {
  return (
    <View style={{ zIndex: 0 }}>
      <IndexAndroid />
    </View>
  );
};

export default App;
