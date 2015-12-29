// Introducing the Provider component:
// Provider is a React Component designed as a wrapper for your application's root component. Its
// purpose is to provide your Redux instance to all of your application's components.

import React from 'react'
import Home from './home'
import { Provider } from 'react-redux'

export default class Application extends React.Component {
  render() {
    return (
      // The Provider must wrap your application's Root component. This way, this component
      // and all its children will have access to your Redux store. We need to pass the store
      // (that we created in index.jsx) to the Provider via its 'store' props.
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    )
  }
}
