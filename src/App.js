import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import AdsListContainer from './components/AdsListContainer'
import DetailPage from './components/DetailPage';


class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <h2>Welcome to Tsum Tsum Shop</h2>
          <Route path='/' exact component={AdsListContainer} />
          <Route path='/ads/:id' component={DetailPage} />
        </div>
      </Provider>   
    )
  }
}

export default App;
