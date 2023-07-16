import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import { HistoryRouter, history } from './router/history'

// 创建应用根实例
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
)
