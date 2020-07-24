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
