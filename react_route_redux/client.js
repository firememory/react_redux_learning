/**
 * Created by dantegg on 16-9-12.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import route from './routes'
import configureStore from './store/configureStore'
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
)