/**
 * Created by clark on 16/4/28.
 */
import '../../css/base.scss';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware }  from 'redux'
import rootReducer from './reducers'
import App from './containers/App'


let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


let app = document.createElement('div')
document.body.appendChild(app)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    app
)
