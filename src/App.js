import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';
import thunk from 'redux-thunk';

import './App.css';
import Header from './Header/header';
import Home from './Home/home';
// import CopyRight from './CopyRight/copyRight';
import Footer from './Footer/footer';
import RegisterContainer from './Register/registerContainer';
import NotFound from './NotFound/notFound';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={RegisterContainer}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
