import React from 'react';
import {render} from 'react-dom'
import {configureStore} from './store'
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './assets.js'

// Needed for onTouchTap
// injectTapEventPlugin();

const store = configureStore()

render(
	<App store={store}/>, document.getElementById('root'))
