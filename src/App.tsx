/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Root from './components/index';
import { Provider } from 'react-redux';
import store from './redux/store/index';


const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};


export default App;
