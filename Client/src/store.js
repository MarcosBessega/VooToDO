import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import saga from 'redux-saga'
import reducer from './reducers'
import initialState from './initialState.js'

export const configureStore = () => {
  // Promise middlware
  const middlewares = [saga]

  // Conditionally apply logging middlware when not in production
  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

  return createStore(reducer, initialState, compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
}
