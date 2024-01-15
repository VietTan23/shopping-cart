// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from './components/Header';
import Cart from './components/Cart';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <Header /> */}
          <Cart />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
