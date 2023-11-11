import React from 'react';

import {NavigationContainer, TabsNavigator} from './navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

export default App;
