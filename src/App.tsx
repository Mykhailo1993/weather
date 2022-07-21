import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
