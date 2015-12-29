// This file is the entry point of our JS bundle. It's here that we'll create our Redux store,
// instantiate our React Application root component, and attach it to the DOM.

import React from 'react'
import { render } from 'react-dom'
// All store creation specific code is located in ./create-store.js asdfasdf 
import createStore from './create-store'
// Application is the root component of our application and the one that holds Redux's Provider
import Application from './application'

// All code for the creation of the Redux instance now lives in a single function in create-store:
const store = createStore()

// Use ReactDOM.render to render -- thanks to ES6 we can just call render thanks to import { render } ...
render(
  // ... and provide our Redux store to our Root component as a prop so that
  // Redux Provider can do its job
  <Application store={store} />,
  document.getElementById('app-wrapper')
)
