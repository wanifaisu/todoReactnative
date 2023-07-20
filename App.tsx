import React from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default App;
