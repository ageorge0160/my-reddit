import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import App from '../App'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <h1 className="App-title">MY SUBREDDITS</h1>
      </header>
      <Provider store={store}>
        <App />
      </Provider>
      </div>
    )
  }
}
