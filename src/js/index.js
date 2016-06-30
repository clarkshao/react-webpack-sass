/**
 * Created by clark on 16/4/28.
 */
import '../css/base.scss';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


/** store 数据结构 sample
 {
   visibilityFilter: 'SHOW_ALL',
   todos: [
     {
       text: 'Consider using Redux',
       completed: true,
     },
     {
       text: 'Keep all state in a single tree',
       completed: false
     }
   ]
 }
 */
let store = createStore(todoApp)


let app = document.createElement('div')
document.body.appendChild(app)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    app
)
