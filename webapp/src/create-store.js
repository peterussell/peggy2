// This is called from index.jsx to instantiate the Redux instance

// Note: we're using a Promise middleware instead of thunkMiddleware like we were before
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promise-middleware'
import * as reducers from './reducers'

// Note: we haven't talked about passing data to finalCreateStore yet, but it allows you
// to pass intiial data to the store if you already have some
export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}
