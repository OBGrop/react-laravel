import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory()

const store = createStore(reducers, compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;

