import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import lessonReducer from './reducers/lessonReducer'
import topicReducer from './reducers/topicReducer'
import {Provider, connect} from "react-redux"
import moduleReducer from './reducers/moduleReducer'


// const store = createStore(counterReducer)

const rootReducer = combineReducers({moduleReducer, lessonReducer, topicReducer})

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      {/*<ModuleListContainer/>*/}
      {/*<CounterComponent/>*/}
      {/*<HelloContainer/>*/}
      {/*<HelloWorld messageProperty={'Hello World????'}/>*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
