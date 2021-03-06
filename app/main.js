import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import store from './store'
import Root from './components/root'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <Root />
    </HashRouter>
  </Provider>,
  document.getElementById('main')
)
