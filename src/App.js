import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import AdsListContainer from './components/AdsListContainer'


class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <h2>Welcome to Tsum Tsum Shop</h2>
          <Route path='/' exact component={AdsListContainer} />
          
        </div>
      </Provider>   
    )
  }
}

export default App;
