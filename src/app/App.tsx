import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from './navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Text>Hello world</Text>
    </NavigationContainer>
  );
}

export default App;
