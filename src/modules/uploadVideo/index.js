/**
 * Created by clark on 16/4/28.
 */
import '../../css/base.scss';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose }  from 'redux'
import rootReducer from './reducers'
import App from './containers/App'
import DevTools from './containers/DevTools'



let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, createLogger()),
        DevTools.instrument()
    )
)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default
        store.replaceReducer(nextRootReducer)
    })
}


let app = document.createElement('div')
document.body.appendChild(app)

render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    app
)
