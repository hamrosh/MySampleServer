import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionList from './components/QuestionsList';
import AddQuestion from './components/AddQuestion';
// for router

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderNavBar from './components/HeaderNavBar';
import CategoryForm from './components/Category/CategoryForm';
import AllCategories from './components/Category/AllCategories';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}

    <BrowserRouter>
      <div>
        <HeaderNavBar />

        <main role="main" class="container">
          <Switch>
            <Route path="/questions/new" component={AddQuestion} />
            <Route path="/category/all" component={AllCategories} />
            <Route path="/category/new" component={CategoryForm} />
            <Route path="/" component={QuestionList} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
